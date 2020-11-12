import React, { Component } from "react";
import Moment from "react-moment";

class BucketItem extends Component {
  render() {
    const { bucket } = this.props;

    return (
      <tr>
        <td>{bucket.b_flag}</td>
        <td>
          <Moment format="YYYY-MM-DD HH:MM:SS">{bucket.b_start_date}</Moment>
        </td>
        <td>{bucket.b_title}</td>

        <td>
          {bucket.b_end_check ? (
            <Moment format="YYYY-MM-DD HH:mm:ss">{bucket.b_end_date}</Moment>
          ) : (
            "ⓞ"
          )}
        </td>
        <td>
          <input type="checkbox" value={bucket.b_cancel} />
        </td>
      </tr>
    );
  }
}

export default BucketItem;
