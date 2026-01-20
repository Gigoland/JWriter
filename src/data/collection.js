const jWriterCollection = {
  // Latin (default)
  en: {
    latin: {
      alphabet: "",
      unicode: 0
    }
  },

  // Georgian (ქართული) - TESTED ✓
  ka: {
    mkhedruli: {
      alphabet: "abgdevzTiklmnopJrstufqRySCcZwWxjhHI",
      unicode: 4304
    },
    mtavruli: {
      alphabet: "abgdevzTiklmnopJrstufqRySCcZwWxjhHI",
      unicode: 7312
    },
    nuskhuri: {
      alphabet: "abgdevzTiklmnopJrstufqRySCcZwWxjh",
      unicode: 11520
    },
    asomtavruli: {
      alphabet: "abgdevzTiklmnopJrstufqRySCcZwWxjh",
      unicode: 4256
    }
  },

  // Armenian (Հայերեն) - TESTED ✓
  hy: {
    lowercase: {
      alphabet: "abgdezveTiklxcmnopJrstufqRySCw",
      unicode: 1377
    }
  },

  // Cherokee (ᏣᎳᎩ) - TESTED ✓
  chr: {
    syllabary: {
      alphabet: "aeiouAEIOUvsgdhtwkynmlqjp",
      unicode: 5024
    }
  },

  // Coptic (Ⲙⲉⲧⲣⲉⲙ̀ⲛⲭⲏⲙⲓ) - TESTED ✓
  cop: {
    lowercase: {
      alphabet: "abgdezhTiklmnxoprstyfw",
      unicode: 11393
    }
  },

  // Greek (Ελληνικά) - TESTED ✓
  el: {
    lowercase: {
      alphabet: "abgdefzhiklmnxoprstycwqv",
      unicode: 945
    }
  },

  // Hindi Devanagari (हिन्दी) - TESTED ✓
  hi: {
    consonants: {
      alphabet: "kKgGNcCjJnTDdNtTdDnpPbBmyrlvSssh",
      unicode: 2325
    }
  },

  // Korean Hangul (한글) - TESTED ✓
  ko: {
    consonants: {
      alphabet: "gGkndDrRlmbBsScjJhqwtpP",
      unicode: 12593
    }
  },

  // Ogham (᚛ᚑᚌᚐᚋ᚜) - TESTED ✓
  ogham: {
    standard: {
      alphabet: "blfsnhdtcqmgzraoueI",
      unicode: 5761
    }
  },

  // Runic Elder Futhark (ᚠᚢᚦᚨᚱᚲ) - TESTED ✓
  runes: {
    elder_futhark: {
      alphabet: "fuTarkgwhnijepzstbemlNdo",
      unicode: 5792
    }
  },

  // Russian Cyrillic (Русский) - TESTED ✓
  ru: {
    lowercase: {
      alphabet: "abvgdeёžzijklmnoprstufhcčšщъыьэюя",
      unicode: 1072
    }
  },

  // Thai (ไทย) - TESTED ✓
  th: {
    consonants: {
      alphabet: "kKcCtdDbpPfmyrlwsShL",
      unicode: 3585
    }
  }
};
