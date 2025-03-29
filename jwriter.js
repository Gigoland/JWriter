/*!
 * JWriter.js v0.0.1 beta
 * https://www.Gigoland.com
 * Released under the MIT License
 */
String.prototype.jWriterConvert = function(params) {
  let letter,
      result = []
  ;
  for (let search = 0; search < this.length; search++) {
      letter = this.substring(search, 1);
      if ((position = params.alphabet.indexOf(letter)) >= 0) {
        result.push(String.fromCharCode(position + params.unicode));
      } else {
        result.push(letter);
      }
  }
  return result.join('');
};

Element.prototype.jWriterValue = function(val) {
  this.focus();
  if (document.selection) {
    let range = document.selection.createRange();
    if (range) {
      range.text = val;
    }
  } else if (this.selectionStart !== undefined) {
    with (this) {
      var scrolltop = scrollTop,
          start = selectionStart,
          end = selectionEnd
      ;
    }
    this.value = this.value.substring(0, start)
      + val
      + this.value.substring(end, this.value.length)
    ;
    this.scrollTop = scrolltop;
    this.setSelectionRange(
      start + val.length,
      start + val.length
    );
  } else {
    this.value += val;
    this.setSelectionRange(
      this.value.length,
      this.value.length
    );
  }
};

class JWriter {
  static $element = null;
  static alphabet = null;
  static alphabetLibrary = {
    'ka': {
      'asomtavruli': {
        'alphabet': 'abgdevzTiklmnopJrstufqRySCcZwWxjh',
        'unicode': 4256
      },
      'mkhedruli': {
        'alphabet': 'abgdevzTiklmnopJrstufqRySCcZwWxjhHI',
        'unicode': 4304
      },
      'mtavruli': {
        'alphabet': 'abgdevzTiklmnopJrstufqRySCcZwWxjhHI',
        'unicode': 7312
      },
      'nuskhuri': {
        'alphabet': 'abgdevzTiklmnopJrstufqRySCcZwWxjh',
        'unicode': 11520
      },
    }
  };

  constructor($e, alphabet) {
    if (/input|textarea/i.test($e.nodeName)) {
      this.$element = $e;
      this.$element.dataset['jwriterInitialized'] = true;
      this.alphabet = alphabet;
    }
  }

  write(e) {
    e.stopPropagation();
    const charCode = String.fromCharCode(e.keyCode),
          converted = charCode.jWriterConvert(
            this.alphabet
          )
    ;
    if (converted !== charCode) {
      e.preventDefault();
      return this.$element.jWriterValue(converted);
    }
  }
}
