import React, { Component } from "react";
import BBsInsert from "./BBsInsert";
import BBsList from "./BBsList";

class BBsMain extends Component {
  state = {
    state1: "",
    state2: "",
    bbsList: [
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
    ],
  };

  render() {
    const { bbsList, state1, state2 } = this.state;
    return (
      <div>
        <BBsInsert />
        <BBsList bbsList={bbsList} state1={state1} state2={state2} />
      </div>
    );
  }
}

export default BBsMain;
