const express = require("express");
const asyncHandler = require("express-async-handler");
const { Book } = require("../../db/models");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async function (req, res) {
        const books = await Book.findAll();
        res.json({ books });
    })
);



module.exports = router;