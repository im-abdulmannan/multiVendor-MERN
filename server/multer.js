const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1E9);
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "_" + uniqueSuffix + ".png");
  },
});

exports.upload = multer({ storage: storage });