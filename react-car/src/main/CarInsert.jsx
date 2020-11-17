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

  render() {
    const { save } = this.props;

    const { state, handleOnChange } = this;
    const { dist, how_far, cost, where } = state;
    return (
      <div className="input_block">
        <input
          name="dist"
          value={dist}
          placeholder="구분"
          onChange={handleOnChange}
        />
        <input
          name="how_far"
          value={how_far}
          placeholder="현재거리"
          onChange={handleOnChange}
        />
        <input
          name="cost"
          value={cost}
          placeholder="소모비용"
          onChange={handleOnChange}
        />
        <input
          name="where"
          value={where}
          placeholder="장소"
          onChange={handleOnChange}
        />
        <button onClick={() => save(this.state)}>저장</button>
      </div>
    );
  }
}

export default CarInsert;
