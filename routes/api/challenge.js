const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { Challenge} = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");

const router = express.Router();

const validateGoal = [
    check("goal", "please provide a goal")
    .exists({checkNull: true})
    .exists({checkFalsy: true})
]

router.get('/', asyncHandler(async (_req, res, _next) => {
    const goals = await Challenge.findAll();
    res.json({goals})

    console.log('this is the get method in challenge backend')
}))



//Create
router.post(
    '/',
    validateGoal,
    handleValidationErrors,
    asyncHandler(async (req, res) => {
        const {goal} = req.body;
    
        const newGoal = await Challenge.addGoal({goal})
       console.log(goal)

        return res.json({newGoal})
    })
)

module.exports = router;
