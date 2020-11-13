import React, { Component } from "react";
import "../css/BBsList.css";
import BBsItem from "./BBsItem";

class BBsList extends Component {
  render() {
    const bbsList = [
      {
        id: 0,
        b_writer: "농농이",
        b_date_time: "2020-11-13",
        b_subject: "놀아줘",
      },
      {
        id: 0,
        b_writer: "빙빙이",
        b_date_time: "2020-11-13",
        b_subject: "에엫따..!",
      },
      { id: 0, b_writer: "희", b_date_time: "2025-01-01", b_subject: "읭?" },
    ];
    const bbsItemList = bbsList.map((bbs, index) => {
      return <BBsItem index={index} bbs={bbs} />;
    });
    return (
      <div id="tablediv">
        <section>
          <table>
            <caption>BBS 테이블이지롱</caption>
            <thead>
              <tr>
                <th>No</th>
                <th>작성자</th>
                <th>작성일시</th>
                <th>제목</th>
                <th>&hearts;</th>
              </tr>
            </thead>
            <tbody>{bbsItemList}</tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default BBsList;
