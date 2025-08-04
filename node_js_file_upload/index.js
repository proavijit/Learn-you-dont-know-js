const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Step 1: Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save in uploads folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Save with unique name
  },
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "upload.html"));
});

// Step 2: Multer middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB max
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
      cb(null, true); // File allowed
    } else {
      cb(new Error("Only image files (jpg, jpeg, png) are allowed!"));
    }
  },
});

app.post("/upload", (req, res) => {
  upload.single("myFile")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).send("Multer Error: " + err.message);
    } else if (err) {
      return res.status(400).send("Upload Error: " + err.message);
    }

    res.send("File uploaded successfully!");
  });
});

//
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
