import React, { Component } from "react";

class BucketItem extends Component {
  render() {
    const { bucket } = this.props;

    return (
      <tr>
        <td>{bucket.b_flag}</td>
        <td>{bucket.b_start_date}</td>
        <td>{bucket.b_title}</td>
        <td>{bucket.b_end_check && bucket.b_end_date}</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  }
}

export default BucketItem;
