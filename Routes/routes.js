const express = require('express');
const router = express.Router();
const Feed = require('../Models/database');
router.get('/',async (req,res)=>{
    try {
        const post  = await Feed.find();
        res.json(post);
    }catch (err) {
        res.json({message: err});
    }
});

router.post('/', async(req,res)=>{
     console.log(req.body);
    const post = new Feed({
        fullname: req.body.fullname,
        streetone: req.body.streetone,
        streettwo: req.body.streettwo,
        city: req.body.city,
        district: req.body.district,
        pincode: req.body.pincode,
        country: req.body.country,
        number: req.body.number,
        email: req.body.email,
        gender: req.body.gender,
        school: req.body.school,
        college: req.body.college,
        yearsa: req.body.yearsa,
        astudy: req.body.astudy,
        graduteschool: req.body.graduteschool,
        yearsas: req.body.yearsas,
        skills: req.body.skills,
        qualification: req.body.qualification,
        current: req.body.current,
        position: req.body.position,
        salary: req.body.salary,
        reason: req.body.reason
    });
    try{
        const saveposts = await post.save();
    res.json(saveposts);
    }catch(err) {
        res.json({message: err});
    }
});


module.exports = router;