const express = require("express");
const router = express.Router();


// default route add routes above
router.get('*', (req, res)=> {
  res.sendFile(Path.join(__dirname, 'build/index.html'));
});

module.exports = router;
