import React, { Component } from "react";
import "../css/BBsList.css";
import BBsItem from "./BBsItem";

class BBsList extends Component {
  render() {
    const { bbsList, fetchBBs, handleUpdate } = this.props;
    const bbsItemList = bbsList.map((bbs, index) => (
      <BBsItem
        key={bbs.id}
        index={index}
        bbs={bbs}
        fetchBBs={fetchBBs}
        handleUpdate={handleUpdate}
      />
    ));
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
