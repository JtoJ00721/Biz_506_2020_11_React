import React, { Component } from "react";
import "../css/CarMain.css";
import Moment from "react-moment";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
  id = 0;

  state = {
    carList: [
      {
        c_id: 0,
        c_dist: "토끼 포획",
        c_start_time: "2020-11-17",
        c_end_time: "2020-11-18",
        c_how_far: 355000,
        c_cost: 2000000000,
        c_where: "달",
      },
    ],
  };

  componentDidUpdate(perProps, perState) {
    const perString = JSON.stringify(perState.carList);
    const thisString = JSON.stringify(this.state.carList);
    if (perString !== thisString) {
      window.localStorage.setItem("carList", thisString);
    }
  }

  componentDidMount() {
    const loadCarList = localStorage.getItem("carList");
    if (loadCarList) {
      const jsonCarList = JSON.parse(loadCarList);
      this.setState({ carList: jsonCarList });
      this.id = jsonCarList.length;
    }
  }

  carInsert = (dist, how_far, now_far, cost, where) => {
    const dateTime = Moment().format("YYYY-MM-DD HH:mm:ss");
    const traval = {
      c_id: ++this.id,
      c_dist: dist,
      c_start_time: dateTime.toString(),
      c_end_time: "",
      c_how_far: how_far,
      c_cost: cost,
      c_where: where,
    };

    this.setState({
      carLIst: this.set.carList.concat({ ...traval }),
    });

    this.setState({ carList: [...this.state.carList, traval] });
  };

  render() {
    return (
      <section className="section_allui">
        <CarInsert />
        <CarList />
      </section>
    );
  }
}

export default CarMain;
