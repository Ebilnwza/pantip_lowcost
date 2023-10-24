const express = require('express');
const router = express.Router();
const usermodel = require('../config/models/usermodel');
const postsmodel = require('../config/models/postsmodel');
const commentmodel = require('../config/models/commentmodel')
router.get('/:id', async(req,res)=>{
    const id = req.params.id
    const postdata = await postsmodel.findById(id);
    if(username === postdata.author ||username ==='admin')
    {
        res.render('update',{id,postdata})
    }
    else{
        res.send('แหนะไม่ใช่เจ้าของแก้ไม่ได้นะ')
    }
})
router.post('/post',async(req,res)=>{
    const id=  req.body.id;
    const content =  req.body.content
    const title =  req.body.title
    console.log(content,title);
    try{
        await postsmodel.findByIdAndUpdate(id,{title: title, content:content} ,{new: true});
    }catch(error){
        console.log(error);
    }
    await res.redirect('/post/'+id);
})
/////////////////////comment
router.get('/comment/:id', async(req,res)=>{
    const id = req.params.id
    const commentdata = await commentmodel.findById(id)
    if(username === commentdata.author || username ==='admin'){
        res.render('updatecomment',{id,commentdata})
    }
        else{
        res.send('แหนะไม่ใช่เจ้าของแก้ไม่ได้นะ')
    }
})
router.post('/comment',async(req,res)=>{
    const id = req.body.id
    const content = req.body.content
    await commentmodel.findByIdAndUpdate(id,{content:content})
    res.redirect('/')
})
module.exports = router;