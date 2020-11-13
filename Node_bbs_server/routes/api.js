// ES 2015 이상의 문법
// import express from "express"

// 현재 nodejs가 지원하는 문법
const express = require("express");
const router = express.Router();

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
  res.json(list);
});

module.exports = router;
