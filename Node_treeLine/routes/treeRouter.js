import express from "express";
let router = express.Router();

import treeVO from "../models/TreeVO.js";
import { DATA_GO_SERVICE_KEY, TREE_PATH_URL } from "../modules/Data.go.kr.js";

router.get("/", (req, res) => {
  treeVO
    .find({})
    .sort({ sttreeStretNm: 1 })
    .exec((err, data) => {
      res.render("tree_view", { tree_list: data });
    });
});

export default router;
