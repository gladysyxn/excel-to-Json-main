import express from 'express';
import { processExcelUpload } from '../controllers/controller.js';
const router = express.Router();

import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => {
    res.render('index', { rows: [] });
});

router.post('/upload', upload.single('excelFile'), processExcelUpload);

export default router;
