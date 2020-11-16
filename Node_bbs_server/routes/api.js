// ES 2015 이상의 문법
// import express from "express"

// 현재 nodejs가 지원하는 문법
const express = require("express");
const { request } = require("../app");
const router = express.Router();
// 폴더에 index.js 파일이 있을경우
// 폴더를 require()하면 index.js 파일이 읽키게 된다.
const { bbsDao } = require("../models/");

router.get("/", (req, res) => {
  // res.send("반갑지롱");
  res.render("index", { data: "data" });
});

router.get("/bbsList", (req, res) => {
  const list = [
    { id: 0, writer: "농농이", subject: "게시판" },
    { id: 0, writer: "빙빙이", subject: "게시판" },
    { id: 0, writer: "희", subject: "게시판" },
  ];

  bbsDao.findAll({ order: [["b_date_time", "DESC"]] }).then((bbsList) => {
    res.json(bbsList);
  });
  // res.json(list);
});

/**
 * web browser로부터 데이터 전달받기
 * ?변수=값 : req.query.변수
 * /:변수 : req.params.변수
 * form의 input tag에서 name으로 설정된 변수 : req.body.변수
 * ajax를 통해서 전달받은 데이터 : req.body.변수
 */
router.post("/insert", (req, res) => {
  bbsDao
    .create({
      b_writer: req.body.b_writer,
      b_date_time: Date().toString(),
      b_subject: req.body.b_subject,
      b_content: req.body.b_content,
    })
    .then((result) => {
      // res.json(result);
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

// localhost:3000/api/view?id=
router.get("/view", (req, res) => {
  const b_id = req.query.id;
  bbsDao
    .fineOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

// localhost:3000/api/view/값
router.get("/view/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

router.post("/update/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .update(
      {
        b_writer: req.body.b_writer,
        b_subject: req.body.b_subject,
        b_content: req.body.b_content,
      },
      { where: { b_id: Number(b_id) } }
    )
    .then((result) => {
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/delete/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .destroy({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.redirect("/api/bbsList");
    });
});

module.exports = router;
