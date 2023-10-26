'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useSpeechRecognition = require('./useSpeechRecognition');

Object.defineProperty(exports, 'useSpeechRecognition', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_useSpeechRecognition).default;
  }
});

var _useSpeechSynthesis = require('./useSpeechSynthesis');

Object.defineProperty(exports, 'useSpeechSynthesis', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_useSpeechSynthesis).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }