const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    img: {
      type: Buffer,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

// photoSchema.methods.toJSON = function () {
//   const photo = this;
//   const photoObject = photo.toObject();
//   delete photoObject.photo;
// };

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
