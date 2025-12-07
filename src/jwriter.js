/**
 * JWriter - Language script converter
 * @version 0.0.2
 * @author Gigoland.com
 * @license MIT License
 * @see {@link https://github.com/Gigoland/JWriter}
 * @description Modern lightweight JavaScript library for real-time language script conversion
 */

/**
 * Converts a string from latin alphabet to target alphabet using provided parameters
 * @param {Object} params - Conversion parameters containing alphabet mapping and unicode offset
 * @param {string} params.alphabet - The latin character mapping
 * @param {number} params.unicode - The unicode starting point for target alphabet
 * @returns {string} The converted string
 */
String.prototype.jWriterConvert = function(params) {
  if (!params) {
    return this.toString();
  }

  const src = this.toString();
  const out = [];

  for (let i = 0; i < src.length; i++) {
    const letter = src[i];
    const pos = params.alphabet.indexOf(letter);
    out.push(pos >= 0 ? String.fromCharCode(params.unicode + pos) : letter);
  }

  return out.join('');
};

/**
 * Inserts text at the current cursor position in an input/textarea element
 * @param {string} value - The text to insert
 */
Element.prototype.jWriterValue = function(value) {
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
};

class JWriter {
  /**
   * Set of all JWriter instances waiting to be initialized
   * @static
   */
  static waiting = new Set();

  /**
   * Creates a new JWriter instance
   * @param {HTMLInputElement|HTMLTextAreaElement} $element - The input or textarea element to attach to
   * @param {Object} collection - The language/alphabet collection data
   * @param {string|null} language - The language code (e.g., 'ka' for Georgian)
   * @param {string|null} alphabet - The alphabet type (e.g., 'mkhedruli', 'asomtavruli')
   */
  constructor($element, collection, language = null, alphabet = null) {
    if (!$element || !/input|textarea/i.test($element.nodeName)) {
      throw new Error('JWriter requires an input or textarea element.');
    }

    this.$element = $element;
    this.collection = collection;
    this.language = language;
    this.alphabet = alphabet;
    this.handler = null;

    JWriter.waiting.add(this);
  }

  /**
   * Initializes all waiting JWriter instances
   * @static
   */
  static initAll() {
    JWriter.waiting.forEach(instance => instance.activate());
  }

  /**
   * Activates the JWriter instance by setting up event listeners
   * @param {boolean} isReactivated - Whether this is a reactivation (e.g., after language switch)
   */
  activate(isReactivated = false) {
    this.params = this.collection?.[this.language]?.[this.alphabet] || null;

    if (!this.params) {
      console.warn(
        `JWriter: language="${this.language}" with alphabet="${this.alphabet}" not found in collection. Transliteration disabled.`
      );
      return;
    }

    // If already initialized and not reactivating, skip
    if (this.$element.dataset.jwriterInitialized && !isReactivated) {
      return;
    }

    // Clean up old listener if reactivating
    if (isReactivated && this.handler) {
      this.$element.removeEventListener('keypress', this.handler);
    }

    this.$element.dataset.jwriterInitialized = 'true';
    this.handler = this.write.bind(this);

    this.$element.addEventListener('keypress', this.handler);
  }

  /**
   * Destroys the JWriter instance by removing event listeners and cleaning up
   */
  destroy() {
    if (this.handler) {
      this.$element.removeEventListener('keypress', this.handler);
      this.handler = null;
    }
    delete this.$element.dataset.jwriterInitialized;
    JWriter.waiting.delete(this);
  }

  /**
   * Handles keypress events and converts latin characters to target alphabet
   * @param {KeyboardEvent} e - The keyboard event
   */
  write(e) {
    if (!this.params) {
      return;
    }

    const char = (e.key && e.key.length === 1)
      ? e.key
      : String.fromCharCode(e.which || e.keyCode);

    const converted = char.jWriterConvert(this.params);

    if (converted !== char) {
      e.preventDefault();
      this.$element.jWriterValue(converted);
    }
  }

  /**
   * Switch language/alphabet for one instance
   * @param {string|null} language - New language code to switch to
   * @param {string|null} alphabet - New alphabet type to switch to
   */
  switch(language = null, alphabet = null) {
    if (language) {
      this.language = language;
    }
    if (alphabet) {
      this.alphabet = alphabet;
    }

    // Reactivate with new parameters
    this.activate(true);
  }

  /**
   * Switch language/alphabet for ALL instances at once
   * @static
   * @param {string|null} language - New language code to switch to for all instances
   * @param {string|null} alphabet - New alphabet type to switch to for all instances
   */
  static switchAll(language = null, alphabet = null) {
    JWriter.waiting.forEach(instance => instance.switch(language, alphabet));
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JWriter;
}
