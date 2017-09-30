/**
 * Created by Jeff Haskell on 8/15/2017.
 */
/**
 * Created by Jeff Haskell on 7/29/2017.
 */
var express = require("express");
var chatRoutes = express.Router();
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var Chat = require("../models/chat");

//VERIFY
chatRoutes.use("/", function(req,res,next){

});
//CREATE CHAT
chatRoutes.post("/createChat", function(req,res)  {
  var newChat = Chat({
    Participants: req.body.Participants
  });
  newChat.save(function(err, result)  {
    if(err) {
      return res.status(500).json({
        title: 'Error saving chat',
        error: err
      })
    }
    res.status(200).json({
      title: 'success',
      result: result
    });
  });
});
//GET CHATS
chatRoutes.get("/getChats:userID", function(req,res) {
  Chat.find({$and:[{'Participants.User' : req.params.userID},{'Participants.Deleted': false}]}, function(err, result) {
    if(err) {
      res.status(500).json({
        title: 'Error',
        error: err
      });
    }
    if(!err)  {
      res.status(200).json({
        message: req.params.userID,
        result: result
      });
    }
  });
});
//DELETE CHAT
chatRoutes.patch("/deleteChat:userID", function(req,res)  {
  Chat.findOne({_id : req.body._id}, function(err, chat) {
    if(!err){
      if(chat){
        chat.Participants.forEach(function(user) {
          if(user.User.equals(req.params.userID)){
            user.Deleted = true;
          }
        });
        chat.save(function(err, result) {
          if(!err)  {
            res.status(200).json({
              title: 'success',
              result: result
            })
          }
        });
      }
    }
    else{
      res.status(500).json({
        title: 'failed',
        error: err
      });
    }
  });
});
//MESSAGES
  //CREATE MESSAGE
chatRoutes.post("/createMessage:chatID", function(req,res)  {
  Chat.findById(req.params.chatID, function (err, chat) {
    if(err) {
      return res.status(500).json({
        title: 'error',
        error: err
      })
    }
    if(chat) {
      chat.Messages.push(req.body);
      chat.save(function(errr, result) {
        if(errr) {
          return res.status(500).json({
            title: 'Error saving to chat',
            error: errr
          })
        }
        res.status(201).json({
          title: 'Success',
          result: result
        })
      })
    }
  });
});
  //GET MESSAGES
chatRoutes.get("/getMessages:chatID", function(req, res)  {
  Chat.findById(req.params.chatID, function(err, result){
    if(err) {
      return res.status(500).json({
        title: 'Error finding Chat',
        error: err
      });
    }
    if(result)  {
      res.status(200).json({
        title: "Success",
        result: result
      })
    }
  })
});

module.exports = chatRoutes;
