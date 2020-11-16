import React, { Component } from "react";
import BBsInsert from "./BBsInsert";
import BBsList from "./BBsList";

const BBS_INSERT_URL = "http://localhost:5000/api/insert";
const BBS_FETCH_URL = "http://localhost:5000/api/bbsList";

class BBsMain extends Component {
  timer = "";

  state = {
    state1: "",
    state2: "",
    isFetch: false,
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

  componentDidMount() {
    this.fetchBBsList();
    // setInterval(callback,time)
    // 최초의 callback함수가 실행고 이후에 time만큼 경과하면
    // 또 callback함수를 계속해서 실행하라
    this.timer = setInterval(() => this.fetchBBsList(), 5000);
  }

  // react에서 setInterval()을 사용하여 어떤 함수를 실행하면
  // 반드시 WillUnmount() 메서드에서
  // react가 종료되기 전에 timer를 제거해줘야 한다.
  componentWillUnmount() {
    this.timer = null;
  }

  // JS 에 표준으로 내장된 ajax method
  fetchBBsList = () => {
    this.setState({ ...this.state, isFetch: true });
    fetch(BBS_FETCH_URL)
      .then((res) => {
        // response 객체가 통째로 수신된 상태
        // response 객체 중에서 body부분만 json 으로 변환하여
        // return
        return res.json();
      })
      .then((result) => {
        // 앞의 then()에서 return한 데이터를 result변수에 받고
        // bbsList에 데이터를 적용
        this.setState({
          bbsList: result,
          isFetch: false,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { bbsList, state1, state2 } = this.state;
    return (
      <div>
        <BBsInsert insertURL={BBS_INSERT_URL} />
        <p>
          {this.state.idFetch
            ? "데이터를 가져오는 중이지롱 ><"
            : "데이터 가져오기 완료지롱 ><"}
        </p>
        <BBsList
          bbsList={bbsList}
          fetchBBs={this.fetchBBsList}
          state1={state1}
          state2={state2}
        />
      </div>
    );
  }
}

export default BBsMain;
