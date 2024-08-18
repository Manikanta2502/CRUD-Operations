const mongoose = require('mongoose');
const Items = require('../Models/Items_sch');

const getItems = async(req,res,next)=>{
    try {
        const items = await Items.find({});
        res.status(200).json(items);
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const getItem = async(req,res,next) => {
    try {
        const {id} = req.params;
        const item = await Items.findById(id);
        res.status(200).json(item);
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const postItem = async(req,res,next)=>{
    try{      
    const item = await Items.create(req.body);
    res.status(200).json(item);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const delItem = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const item = await Items.findByIdAndDelete(id);
        if (!item){
            return res.status(404).json(`Unable to find the item with given ${id}`)
        }
        res.status(200).json(`The given item is deleted with id ${id}`)
    } 
    catch(error){
        res.status(500).json(error.message);
    }
}

const updateItem = async(req,res,next)=>{
    try{
        
        const {id} = req.params;
        const item = await Items.findByIdAndUpdate(id,req.body);
        if (!item){
            return res.status(404).json({message: "The item with given id does not exists"})
        }
        const updatedItem = await Items.findById(id,);
        res.status(200).json(updatedItem);
    }
    catch(error){
        res.status(500).json(error.message)
    }
}
exports.getItems = getItems;
exports.getItem = getItem;
exports.postItem = postItem;
exports.updateItem = updateItem;
exports.delItem = delItem;