const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const Photo = require("../models/photo");
const router = new express.Router();

const upload = multer({
  limits: {
    fileSize: 3000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return Clipboard(new Error("Upload jpg, jpeg, or png!"));
    }
    cb(undefined, true);
  },
});

router.post(
  "/admin/photo-upload",
  upload.single("img"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer).toBuffer(); //add more reformating options here
    const photo = new Photo({ img: buffer });
    await photo.save();

    res.send(buffer);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.post("/admin/test", async (req, res) => {
  const photo = new Photo(req.body);
  try {
    await photo.save();
    res.send(photo);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

module.exports = router;

//upload photos
//option of single or multiple files

//View current database of photos

//Update specific photos
//allowing a new image upload
//or updating information concerning daocument

//Delete photots!
