const express = require("express");
const router = express.Router();
const Path = require("path");

// default route add routes above
router.get('*', (req, res)=> {
  res.sendFile(Path.join(__dirname, 'build/index.html'));
});

module.exports = router;
