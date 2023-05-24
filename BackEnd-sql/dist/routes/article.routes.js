"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _article = require("../controller/article.controller");
var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import { upload, uploadFile} from "../controller/article.controller";

// import fs from 'fs';

var md_upload = (0, _connectMultiparty["default"])({
  uploadDir: 'src/upload/articles'
});
var router = (0, _express.Router)();
router.get('/articles', _article.Controller.getArticles);
router.get('/articles-last', _article.Controller.getArticlesLast);
router.get('/article/:id', _article.Controller.getArticleId);
router.post('/save', _article.Controller.save);
router["delete"]('/article/:id', _article.Controller["delete"]);
router.put('/article/:id', _article.Controller.update);
router.post('/upload-image/:id?', md_upload, _article.Controller.upload);
router.get('/get-image/:image', _article.Controller.getImage);
router.get('/search/:search', _article.Controller.search);
var _default = router;
exports["default"] = _default;