import cookieParser from "cookie-parser"
import express from "express"
import session from "express-session"
import cors from "cors"

import usersRouter from "./src/routes/users.route.js"
import testsRouter from "./src/routes/tests.route.js";
import partiesRouter from "./src/routes/parties.route.js";
import path from "path"
import {fileURLToPath} from 'url';

import dotenv from 'dotenv';
import authRouter from "./src/auth/auth.route.js";
import { ensureAuthantication } from "./src/auth/auth.middleware.js";
import frontendRouter from "./src/routes/frontend.route.js"
import vocabRouter from "./src/routes/vocab.route.js"
import listVocabRouter from "./src/routes/vocablist.route.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const app = express()

const store = session.MemoryStore()

dotenv.config() //Load .env file to process.env

const onDay = 1000*60*60*24

app.use(express.json())

app.use(cookieParser())
app.use(session({
    secret : process.env.SESSION_SECRET,
    saveUninitialized:true,
    cookie : {maxAge : onDay},
    resave:false,
    store : store
}))

//dossier build du frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));


app.use(cors())



app.get("/protected", ensureAuthantication,(req,res)=>{
    res.send("You have access")
})


app.use('/auth/',authRouter)
app.use('/api/users/',usersRouter)
app.use('/api/tests/',testsRouter)
app.use('/api/parties/',partiesRouter)
app.use('/api/vocab/',vocabRouter)
app.use('/api/listvocab/',listVocabRouter)

//frontend
app.use('/',frontendRouter)

app.listen(process.env.PORT,process.env.HOST,()=>{
    console.log("Le server écoute sur le port ",process.env.PORT)
})