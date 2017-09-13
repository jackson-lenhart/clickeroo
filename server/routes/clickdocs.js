import express from "express";

import ClickDocs from "../clickdocs";

const router = express.Router();

router.post("/", (req, res) => {
  const { totalClicks } = req.body;

  ClickDocs.forge({ totalClicks }, { hasTimeStamps: true }).save()
    .then(clickdoc => res.json())
    .catch(err => res.status(500).json({ error: err }));
});

export default router;
