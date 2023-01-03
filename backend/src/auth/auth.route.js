import * as authController from "./auth.controller.js"
import  express  from 'express'

const authRouter = express.Router()

authRouter.post('/signup',authController.signup)
authRouter.post('/login',authController.login)
authRouter.post('/logout',authController.logout)

export default authRouter;