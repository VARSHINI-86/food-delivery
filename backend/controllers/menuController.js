import menuModel from "../models/menuModel.js";
import fs from 'fs'


// add menu item

const addMenu = async (req,res) => {
    
    let image_filename = `${req.file.filename}`;

    const menu = new menuModel({
        name:req.body.name,        
        image:image_filename
    })
    try{
        await menu.save();
        res.json({success:true, message:"Menu Added"})
    }
    catch(error)
    {
       console.log(error)
       res.json({success:false, message:"Error"})
    }
}

const listMenu = async (req, res) => {
  try{
    const menu = await menuModel.find({});
    res.json({success:true,data:menu})
  }
  catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}


// remove food item
const removeMenu = async (req,res) => {
   try{
    const menu = await menuModel.findById(req.body.id);
    fs.unlink(`uploads/${menu.image}`, ()=>{})

    await menuModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Menu Removed"})
   }
   catch(error){
      console.log(error);
      res.json({success:false,message:"Error"})
   }
}

export {addMenu, listMenu, removeMenu}