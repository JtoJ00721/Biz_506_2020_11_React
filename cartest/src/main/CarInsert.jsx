import React, { Component } from "react";

class CarInsert extends Component {
  state = {
    dist: "",
    how_far: "",
    cost: "",
    where: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  save = (e) => {
    const { carInsert } = this.props;
    const { dist } = this.state.dist;
    const { how_far } = this.state.how_far;
    const { cost } = this.state.cost;
    const { where } = this.state.where;
    carInsert(dist, how_far, cost, where);
  };

  render() {
    return (
      <div className="input_block">
        <input name="dist" placeholder="구분" onChange={this.handleOnChange} />
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
