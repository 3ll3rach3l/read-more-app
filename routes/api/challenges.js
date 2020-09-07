const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { Challenge } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { requireUser, generateToken} = require("../util/auth");
const { jwtConfig: { expiresIn } } = require('../../config');

const router = express.Router();

const validateGoal = [
    check("goal", "please provide a goal")
    .exists({checkNull: true})
    .exists({checkFalsy: true})
]



router.get('/', 
requireUser, 
asyncHandler(async function(_req, res, _next){
    const goals = await Challenge.findAll({
        include: [{model: User}, {model: Challenge}],
    });
    res.json({goals})
    console.log("this is from backend challenges----", goals)
}))

//Create
router.post(
    '/',
    validateGoal,
    handleValidationErrors,
    asyncHandler(async function(req, res){
        const {goal, userId} = req.body;
        const challenge = await Challenge.addNewGoal({goal, userId});
    

        // const token = await generateToken(user);
        // res.cookie("token", token, {
        //     maxAge: expiresIn * 1000, // maxAge in milliseconds
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === "production",
        // });
        return res.json({challenge})
    })
)

module.exports = router;
