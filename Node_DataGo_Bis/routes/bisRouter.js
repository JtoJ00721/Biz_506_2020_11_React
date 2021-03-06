import express, { request, response } from "express";
const router = express.Router();

import gjDataVO from "../models/GjStation.js";
import {
  GJ_BUS_ARRIVE_URL,
  DATA_GO_SERVICE_KEY,
} from "../modules/Data.go.kr.js";

router.get("/", (req, res) => {
  console.log("bis root req");

  // tbl_gjbus에서 전체데이터를 가져와서 보여라
  gjDataVO
    .find({})
    .sort({ BUSSTOP_NAME: 1 })
    .exec((err, data) => {
      res.render("bis_view", { station_list: data });
    });
});

router.get("/station", (req, res) => {
  const station = req.query.station;

  // tbl_gjbus에서 전체데이터를 가져와서 보여라
  gjDataVO
    // BUSSTOP_NAME 칼럼에 station 변수에 담긴 문자열이
    // 포함된 데이터를 SELECT 하라
    // SELECT * FROM tbl_gjbus WHERE BUSSTOP_NAME Like %중흥%
    // ORDER BY BUSSTOP_NAME ASC
    .find({ BUSSTOP_NAME: RegExp(station, "ig") })
    .sort({ BUSSTOP_NAME: 1 }) // 1:ASC, -1:DESC
    .exec((err, data) => {
      res.render("bis_view", { station_list: data });
    });
});

// 요청받은 busstop_id 값에 해당하는 버스도착정보를
// 공공DB에서 조회하여 JSON으로 보내기
router.get("/busstop/:busstop_id", async (req, res) => {
  let busstop_id = req.params.busstop_id;
  let queryString = GJ_BUS_ARRIVE_URL;
  queryString += `?serviceKey=${DATA_GO_SERVICE_KEY}`;
  queryString += `&BUSSTOP_ID=${busstop_id}`;
  let reqOPtion = {
    url: queryString,
    method: "GET",
  };

  await request(reqOPtion, (err, response, body) => {
    if (err) console.log(err);
    const data = JSON.parse(body);
    const station_list = data.STATION_LIST;
    res.json(station_list);
  });

  // {busstop_id: busstop_id;}
  // res.json({ busstop_id });
});

export default router;
