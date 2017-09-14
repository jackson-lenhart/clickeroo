import express from "express";

import ClickDocs from "../models/clickdocs";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const { totalClicks } = req.body;

  ClickDocs.forge({ totalClicks }, { hasTimeStamps: true }).save()
    .then(clickdoc => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
});

export default router;
