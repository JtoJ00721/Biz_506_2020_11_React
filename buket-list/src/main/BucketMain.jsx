import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  /**
   * id 변수는 state가 아닌 일반형변수이다
   * 일반형변수는 코드내에서 자유롭게 값을 변경하여
   * 사용할수 있고
   * 여기에서는 bucketList의 b_id값의 PK 값을 만들기 위해 사용한다.
   */
  id = 0;
  // react에서는 state형 변수는 절대 직접 변경하지 않는다.
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: "중요",
        b_start_date: "2020-11-12",
        b_title: "리액트 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancel: false,
      },
      {
        b_id: 1,
        b_flag: "일반",
        b_start_date: "2020-10-12",
        b_title: "달토끼 잡아오기",
        b_end_date: "2020-11-12",
        b_end_check: true,
        b_cancel: false,
      },
    ],
  };

  /**
   * class Component에서 child Component에 state형 변수를 보낼때는
   * 보낼변수명={this.state.변수}
   *
   * 함수를 보낼때
   * 보낼함수명 = {this.함수명}
   */
  render() {
    return (
      <div>
        <BucketInsert />
        <BucketList bucketList={this.state.bucketList} />
      </div>
    );
  }
}

export default BucketMain;
