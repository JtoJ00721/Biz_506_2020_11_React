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
  id = 1;
  // react에서는 state형 변수는 절대 직접 변경하지 않는다.
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_start_date: "2020-11-12",
        b_title: "리액트 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancel: false,
      },
      {
        b_id: 1,
        b_flag: 1,
        b_start_date: "2020-10-12",
        b_title: "달토끼 잡아오기",
        b_end_date: "2020-11-12",
        b_end_check: true,
        b_cancel: false,
      },
    ],
  };

  /**
   * Life Cycle Method
   * React의 Class type Component에는 여러가지 내장 metbod가 있다.
   * 데이터의 변화가 발생하면 정해진 순서에 따라 내장 method가 실행되면서
   * 화면을 rendering 한다.
   * 이러한 Method 들을 Life Cycle Method라고 한다.
   *
   * componentDidUpdate : Component가 Update 되면 ->
   */
  componentDidUpdate;

  bucketInsert = (bucket_title) => {
    const date = new Date();
    const bucket = {
      b_id: ++this.id,
      b_flag: 9,
      b_start_date: date.toString(),
      b_title: bucket_title,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };

    // 일반적인 JS 코드에서
    // bucketList.push(bucket)
    // react의 선언적 철학
    // 절대 state형 변수는 직접 변경하지 말라!!!
    this.setState({
      bucketList: this.state.bucketList.concat({ ...bucket }),
    });

    // 전개연산자를 사용하는 방법
    this.setState({ bucketList: [...this.state.bucketList, bucket] });
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
        <BucketInsert bucketInsert={this.bucketInsert} />
        <BucketList bucketList={this.state.bucketList} />
      </div>
    );
  }
}

export default BucketMain;
