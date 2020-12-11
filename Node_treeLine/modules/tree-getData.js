import request from "request";
import treeVO from "../models/TreeVO.js";
import { DATA_GO_SERVICE_KEY, TREE_PATH_URL } from "./Data.go.kr.js";
import { response } from "express";

let execTree = function () {
  let DataServiceKey = encodeURIComponent(DATA_GO_SERVICE_KEY);
  let queryString =
    TREE_PATH_URL +
    "?" +
    encodeURIComponent("ServiceKey") +
    "=" +
    DataServiceKey;

  let reqOption = {
    url: queryString,
    method: "GET",
    headers: {
      "Content-type": "application/json",
      accept: "application/json",
    },
  };

  request(reqOption, async (err, response, body) => {
    let data = JSON.parse(body);
    let resCode = data.RESULT.RESULT_CODE;
    let resMessage = data.RESULT.RESULT_MSG;

    let tree_list = data.TREE_LIST;
    console.log("가로수길 정보 데이터 개수 : ", tree_list.length);
  });
};

export let Exec = () => execTree;
