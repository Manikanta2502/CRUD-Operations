const mongoose = require('mongoose');
const Items = require('../Models/Items_sch');
const { validationResult } = require('express-validator');
const Users = require('../Models/users_sch');

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
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({message: errors.array()});
    }
    try{      
    const user_id = req.params.user_id;
    const item = await Items.create({...req.body,
        user: user_id
    });

    await Users.findByIdAndUpdate(req.params.user_id,{
        $push: {items: item._id}
    });

    res.status(200).json(item);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const delItem = async(req,res,next)=>{
    try{
        const {user_id,item_id} = req.params;

        const item = await Items.findOne({_id: item_id,user: user_id});
        if (!item){
            return res.status(404).json(`Unable to find the item with given ${item_id}`)
        }

        await Items.findByIdAndDelete(item_id);

        await Users.findByIdAndUpdate(user_id,{
            $pull: {items: item_id}
        })
        res.status(200).json(`The given item is deleted with id ${item_id}`)
    } 
    catch(error){
        res.status(500).json(error.message);
    }
}

const updateItem = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    try{
        
        const {user_id,item_id} = req.params;
        const updateData = req.body;
 

        const item = await Items.findOne({user: user_id,_id: item_id});
        if (!item){
            return res.status(404).json({message: "The item with given id does not exists"})
        }

        await Items.findByIdAndUpdate(item_id,updateData)

        const updatedItem = await Items.findById({_id: item_id});
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