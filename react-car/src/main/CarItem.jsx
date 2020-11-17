import React, { Component } from "react";

class CarItem extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>index</td>
          <td>{this.state.c_dist}</td>
          <td>{this.c_start_time}</td>
          <td>{this.c_end_time}</td>
          <td>{this.c_how_far}</td>
          <td>{this.c_cost}</td>
          <td>{this.c_where}</td>
        </tr>
      </div>
    );
  }
}

export default CarItem;
