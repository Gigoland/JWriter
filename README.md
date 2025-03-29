# JWriter.js beta
Javascript Alphabet Writer

Example:

// Onload
document.addEventListener('DOMContentLoaded', () => {
  // Language letters convert
  if (document.querySelector('[lang=ka]')) {
    document.querySelectorAll('[lang=ka]').forEach(($element) => {
      if (typeof $element.dataset['jwriterInitialized']) === 'undefined') {
        const jw = new JWriter($element, JWriter.alphabetLibrary.ka.mkhedruli);
        $element.addEventListener('keypress', (event) => {
          return jw.write(event);
        });
      }
    });
  }
});

@todo more doc ;)
