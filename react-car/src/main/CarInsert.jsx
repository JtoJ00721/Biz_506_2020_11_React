import React, { Component } from "react";

class CarInsert extends Component {
  state = {
    dist: "",
    start_time: "",
    how_far: 0,
    cost: 0,
    where: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  save = (e) => {
    const { carInsert } = this.props;
    const form_data = ({
      c_dist,
      c_start_time,
      c_how_far,
      c_cost,
      c_where,
    } = this.state);
    carInsert(form_data);
  };

  render() {
    return (
      <div className="input_block">
        <input name="dist" placeholder="구분" onChange={this.handleOnChange} />
        <input
          name="start_time"
          placeholder="시작일시"
          onChange={this.handleOnChange}
        />
        <input
          name="how_far"
          placeholder="현재거리"
          onChange={this.handleOnChange}
        />
        <input
          name="cost"
          placeholder="소모비용"
          onChange={this.handleOnChange}
        />
        <input name="where" placeholder="장소" onChange={this.handleOnChange} />
        <button type="button" onClick={this.save}>
          저장
        </button>
      </div>
    );
  }
}

export default CarInsert;
