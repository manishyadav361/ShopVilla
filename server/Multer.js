import multer from "multer";
import path from "path";
import aws from "aws-sdk";
import multerS3 from "multer-s3";

// aws access configuration
aws.config.update({
  secretAccessKey: "xxxxxxxxxxx",
  accessKeyId: "xxxxxxxx",
  region: "us-east-1",
});

// accept file type
const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

// initializing aws s# bucket
const s3 = new aws.S3();

const s3Storage = {
  s3: s3,
  bucket: "bucket-name",
  key: function (req, file, cb) {
    console.log(file);
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
};

// s3 storage
const upload = multer({
  storage: s3Storage,
});

// local file path
const directory = path.resolve("../client") + "/public/uploads";

// multer storage handler for local
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid image ");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, directory);
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

// upload middleware for local
export const uploadOptions = multer({ storage: storage });
