import { Router } from "express";
// import { upload, uploadFile} from "../controller/article.controller";
import { Controller } from "../controller/article.controller";


// import fs from 'fs';

import multipart from "connect-multiparty";

const md_upload = multipart({ uploadDir: 'src/upload/articles' })


const router = Router();

router.get('/articles', Controller.getArticles); 
router.get('/articles-last', Controller.getArticlesLast); 
router.get('/article/:id', Controller.getArticleId); 
router.post('/save', Controller.save);  
router.delete('/article/:id', Controller.delete)
router.put('/article/:id', Controller.update)
router.post('/upload-image/:id?', md_upload, Controller.upload);
router.get('/get-image/:image', Controller.getImage);
router.get('/search/:search', Controller.search);

export default router;
