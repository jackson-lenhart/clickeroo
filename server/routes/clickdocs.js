import express from "express";
import format from "pg-format";

import ClickDocs from "../models/clickdocs";

const router = express.Router();

router.get("/:id", (req, res) => {
  const clickQuery = {
    select: [ "totalClicks" ],
    where: { id: req.params.id }
  };

  ClickDocs.query(clickQuery).fetch().then(clickdoc => {
    res.json({ clickdoc });
  }).catch(err => {
    console.log(err);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { totalClicks } = req.body;

  ClickDocs.forge({ totalClicks }, { hasTimeStamps: true }).save()
    .then(clickdoc => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
});

export default router;
