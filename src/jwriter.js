/**
 * JWriter - Modern lightweight DOM utility library
 * Version: 0.0.1
 * Author: Gigoland.com
 * License: MIT License
 * Repository: https://github.com/Gigoland/JWriter
 * Description: Language script converter
 */
class JWriter {
  static waiting = new Set();

  constructor($element, collection, language = 'ka', alphabet = 'mkhedruli') {
    if (!$element || !/input|textarea/i.test($element.nodeName)) {
      throw new Error('JWriter requires an input or textarea element.');
    }

    this.$element = $element;
    this.collection = collection;
    this.language = language;
    this.alphabet = alphabet;

    JWriter.waiting.add(this);
  }

  static initAll() {
    JWriter.waiting.forEach(instance => instance.activate());
  }

  activate() {
    if (!this.collection || !this.collection[this.language] || !this.collection[this.language][this.alphabet]) {
      throw new Error('JWriter: collection does not contain the requested language/alphabet.');
    }

    this.params = this.collection[this.language][this.alphabet];
    this.$element.dataset.jwriterInitialized = 'true';
    this.handler = this.write.bind(this);

    this.$element.addEventListener('keypress', this.handler);
  }

  destroy() {
    if (this.handler) {
      this.$element.removeEventListener('keypress', this.handler);
    }
    JWriter.waiting = new Set();
  }

  write(e) {
    const char = (e.key && e.key.length === 1)
      ? e.key
      : String.fromCharCode(e.which || e.keyCode)
    ;
    const converted = char.jWriterConvert(this.params);

    if (converted !== char) {
      e.preventDefault();
      this.$element.jWriterValue(converted);
    }
  }

  static convert(params) {
    const src = String(this);
    const out = [];

    for (let i = 0; i < src.length; i++) {
      const letter = src[i];
      const pos = params.alphabet.indexOf(letter);
      out.push(pos >= 0 ? String.fromCharCode(params.unicode + pos) : letter);
    }

    return out.join('');
  }

  static setValue(value) {
    this.focus();

    if (this.selectionStart !== undefined) {
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const scroll = this.scrollTop;

      this.value = this.value.substring(0, start) + value + this.value.substring(end);
      this.scrollTop = scroll;

      const caret = start + value.length;
      this.setSelectionRange(caret, caret);
    } else {
      this.value += value;
    }
  }

  // Switch language/alphabet for one instance
  switch(language = null, alphabet = null) {
    if (language) {
      this.language = language;
    }
    if (alphabet) {
      this.alphabet = alphabet;
    }
    // Remove old listener
    if (this.handler) {
      this.$element.removeEventListener('keypress', this.handler);
    }
    // Reactivate with new parameters
    this.activate();
  }

  // Switch language/alphabet for ALL instances at once
  static switchAll(language = null, alphabet = null) {
    JWriter.waiting.forEach(instance => instance.switch(language, alphabet));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  String.prototype.jWriterConvert = JWriter.convert;
  Element.prototype.jWriterValue = JWriter.setValue;
});
