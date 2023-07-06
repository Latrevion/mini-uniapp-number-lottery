"use strict";
const validator = {
  "title": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "title": "名称",
    "label": "名称"
  },
  "photo": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "file"
      }
    ],
    "title": "图片",
    "label": "图片"
  }
};
const enumConverter = {};
exports.enumConverter = enumConverter;
exports.validator = validator;
