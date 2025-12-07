# JWriter

> Modern lightweight JavaScript library for real-time language script conversion

[![Version](https://img.shields.io/badge/version-0.0.2-blue.svg)](https://github.com/Gigoland/JWriter)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

JWriter is a powerful yet lightweight utility that enables real-time transliteration from Latin characters to various writing systems. Perfect for multilingual input fields, educational applications, and language learning tools.

## ✨ Features

- 🚀 **Lightweight** - Minimal footprint with zero dependencies
- ⚡ **Real-time conversion** - Instant character transliteration as you type
- 🌍 **Multi-alphabet support** - Georgian scripts included (Mkhedruli, Asomtavruli, Mtavruli, Nuskhuri)
- 🔄 **Dynamic switching** - Change languages/alphabets on the fly
- 📦 **Easy integration** - Simple API, works with vanilla JS
- 🎯 **Cursor-aware** - Maintains cursor position during conversion
- 🔧 **Extensible** - Easy to add new languages and alphabets

## 📦 Installation

### Direct Download

Download `jwriter.min.js` and include it in your HTML:

```html
<script src="path/to/jwriter.min.js"></script>
```

### NPM (Coming Soon)

```bash
npm install jwriter
```

## 🚀 Quick Start

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <script src="collection.js"></script>
  <script src="jwriter.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Create a JWriter instance
      const writer = new JWriter(
        document.getElementById('myInput'),
        jWriterCollection,
        'ka',           // Language: Georgian
        'mkhedruli'     // Alphabet: Mkhedruli
      );

      // Initialize all instances
      JWriter.initAll();
    });
  </script>
</head>
<body>
  <textarea id="myInput" placeholder="Type in Latin..."></textarea>
</body>
</html>
```

## 📖 API Reference

### Constructor

```javascript
new JWriter(element, collection, language, alphabet)
```

**Parameters:**
- `element` (HTMLElement) - Input or textarea element
- `collection` (Object) - Language/alphabet data structure
- `language` (String) - Language code (e.g., 'ka' for Georgian)
- `alphabet` (String) - Alphabet type (e.g., 'mkhedruli')

### Methods

#### Instance Methods

```javascript
// Activate the instance
writer.activate();

// Switch language/alphabet
writer.switch('ka', 'asomtavruli');

// Destroy the instance
writer.destroy();
```

#### Static Methods

```javascript
// Initialize all waiting instances
JWriter.initAll();

// Switch all instances at once
JWriter.switchAll('ka', 'mtavruli');
```

## 🌍 Supported Scripts

### Georgian (ka)

| Alphabet | Description | Example |
|----------|-------------|---------|
| `mkhedruli` | Modern Georgian lowercase | ა ბ გ დ ე |
| `asomtavruli` | Ancient Georgian majuscule | Ⴀ Ⴁ Ⴂ Ⴃ Ⴄ |
| `mtavruli` | Modern Georgian uppercase | Ა Ბ Გ Დ Ე |
| `nuskhuri` | Medieval Georgian minuscule | ⴀ ⴁ ⴂ ⴃ ⴄ |

## 🔧 Custom Collection

Create your own language collection:

```javascript
const myCollection = {
  'language_code': {
    'alphabet_name': {
      'alphabet': 'abcdefghijklmnopqrstuvwxyz',  // Latin mapping
      'unicode': 1234                            // Unicode start point
    }
  }
};
```

## 💡 Advanced Examples

### Multiple Inputs with Different Alphabets

```javascript
const input1 = new JWriter(
  document.getElementById('input1'),
  jWriterCollection,
  'ka',
  'mkhedruli'
);

const input2 = new JWriter(
  document.getElementById('input2'),
  jWriterCollection,
  'ka',
  'asomtavruli'
);

JWriter.initAll();
```

### Dynamic Language Switching

```javascript
const writer = new JWriter(
  document.getElementById('myInput'),
  jWriterCollection,
  'ka',
  'mkhedruli'
);

JWriter.initAll();

// Switch to uppercase
document.getElementById('uppercaseBtn').addEventListener('click', () => {
  writer.switch('ka', 'mtavruli');
});

// Switch back to lowercase
document.getElementById('lowercaseBtn').addEventListener('click', () => {
  writer.switch('ka', 'mkhedruli');
});
```

### Switch All Instances Globally

```javascript
// Create multiple instances
const writers = [
  new JWriter(document.getElementById('input1'), jWriterCollection, 'ka', 'mkhedruli'),
  new JWriter(document.getElementById('input2'), jWriterCollection, 'ka', 'mkhedruli'),
  new JWriter(document.getElementById('input3'), jWriterCollection, 'ka', 'mkhedruli')
];

JWriter.initAll();

// Switch all at once
document.getElementById('globalSwitch').addEventListener('click', () => {
  JWriter.switchAll('ka', 'asomtavruli');
});
```

## 🎨 Character Mapping

### Georgian Mkhedruli Mapping

```
Latin:    a b g d e v z T i k l m n o p J r s t u f q R y S C c Z w W x j h
Georgian: ა ბ გ დ ე ვ ზ თ ი კ ლ მ ნ ო პ ჟ რ ს ტ უ ფ ქ ღ ყ შ ჩ ც ძ წ ჭ ხ ჯ ჰ
```

**Note:** Capital letters represent special Georgian characters (e.g., T = თ, J = ჟ)

## 🛠️ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 👨‍💻 Author

**Gigoland.com**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📮 Support

If you have any questions or issues, please [open an issue](https://github.com/Gigoland/JWriter/issues) on GitHub.

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Repository:** [https://github.com/Gigoland/JWriter](https://github.com/Gigoland/JWriter)
