const express = require('express');
const LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');
const route = express.Router();

const { logUser } = require('../controleurs/userCtrlFront');
const userCtrlFront = require('../controleurs/userCtrlFront');
const postCtrlFront = require('../controleurs/postCtrlFront');
const multer = require ('multer');



/*const storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null)
    }
})*/


//LOGIN
route.get('/login', (req,res) => {res.render('../views/connexion')});
route.post('/login', userCtrlFront.logUser);

//RIGISTER
route.get('/register',(req,res) => {
res.render('../views/register')
});
route.post('/register', userCtrlFront.addUser);

//HOME
route.get('/', postCtrlFront.getPostAll);
route.post('/new', postCtrlFront.addPost);
///route.post('/new', postCtrlFront.addPost);
route.get('/new', postCtrlFront.getPostAll);




//POST
route.get('/logout', userCtrlFront.logOut);

module.exports = route;

