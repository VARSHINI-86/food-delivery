import express from "express"
import multer from "multer"
import { addMenu, listMenu, removeMenu } from '../controllers/menuController.js';

const menuRouter =  express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
 
const upload = multer({storage:storage})

menuRouter.post("/add", upload.single("image"), addMenu)
menuRouter.get("/list",listMenu)
menuRouter.post("/remove", removeMenu)

export default menuRouter
