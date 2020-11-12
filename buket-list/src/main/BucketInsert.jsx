import React, { Component } from "react";

class BucketInsert extends Component {
  /**
   * input box에서 사용자의 입력을 받아 저장할 state 변수 선언하기
   */
  state = {
    bucket_title: "",
  };

  handleOnChange = (e) => {
    // this.setState({ bucket_title: e.target.vlaue });
    /**
     * input box가 여러개일 경우
     * input box에 state변수명을 name 속성으로 지정하라
     * <input name="bucket_title"/>
     * 아래와 같이 변수값을 세팅한다.
     * this. setState( { [e.target.name] : e.target.value } )
     */
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = (e) => {
    if (eval.key === "Enter") {
      alert(this.state.bucket_title);
    }
  };

  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          <input
            name="bucket_title"
            value={this.state.bucket_title}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
            className="w3-input w3-border w3-hover-gray w3-round"
            placeholder="버킷에 추가할 내용용이를 입력하세요 ><"
          />
        </div>
      </section>
    );
  }
}

export default BucketInsert;
