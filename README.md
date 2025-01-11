# JWriter.js beta
Javascript Alphabet Writer

Example:

// Onload
document.addEventListener('DOMContentLoaded', () => {
  // Language letters convert
  if (document.querySelector('[lang=ka]')) {
    document.querySelectorAll('[lang=ka]').forEach(($element) => {
      $element.addEventListener('keypress', (event) => {
        return jWriter(
            $element,
            event,
            jWriterAlphabetLibrary.ka.mkhedruli
        );
      });
    });
  }
});

@todo more doc ;)
