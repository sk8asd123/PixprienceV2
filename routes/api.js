const express = require('express');

const router = new express.Router();

router.get('/timeline', (req, res) => { // Change to timeline
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router;
