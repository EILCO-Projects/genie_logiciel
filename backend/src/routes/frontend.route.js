
import express from 'express'
import path from "path"
import { fileURLToPath } from 'url';

import { ensureAuthorization } from '../security/security.middleware.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const index = path.join(__dirname, '../../../frontend/build', 'index.html');
const frontendCallback = (req, res) => {
    res.sendFile(index)
}
const frontendRouter = express.Router()

frontendRouter.get('/', frontendCallback)
frontendRouter.get('/login', frontendCallback)
frontendRouter.get('/signin', frontendCallback)
frontendRouter.get('/user/', frontendCallback)
frontendRouter.get('/user/profile', frontendCallback)
frontendRouter.get('*', frontendCallback)

export default frontendRouter