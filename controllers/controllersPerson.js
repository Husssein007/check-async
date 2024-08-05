const express = require('express')

const personSchema= require('../model/person')

exports.getAll=async(req,res)=>{

const contacts = await personSchema.find()

res.status(200).json({msg:'voici la liste des users',contacts})


try{

}catch(err){
  console.log(err)}
}

exports.ajout=async(req,res)=>{
           try{
    const newcontact=new personSchema(req.body)
     await newcontact.save()
     res.status(200).json({msg:"contact dans votre db",newcontact})
        }catch(err){
        console.log(err)}
    }



exports.update=async(req,res)=>{
          try{
         const{id}= req.params
         const updatedcontact = await personSchema.findByIdAndUpdate(id,{$set:{...req.body}})
                         res.status(200).json({msg:"updated user"})
         }catch(err){
        console.log(err)
        }}


        exports.remove=async(req,res)=>{
            try{
           const{id}= req.params
           const removecontact = await personSchema.findByIdAndDelete(id)
                           res.status(200).json({msg:"removed user"})
           }catch(err){
          console.log(err)
          }}
  