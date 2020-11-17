import React, { Component } from "react";

class CarList extends Component {
  render() {
    return (
      <div className="table_block">
        <div className="table_holder">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>구분</th>
                <th>시작일시</th>
                <th>종료일시</th>
                <th>현재거리</th>
                <th>소모비용</th>
                <th>장소</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CarList;
