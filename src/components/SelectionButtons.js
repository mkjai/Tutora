import React, { Component } from "react";
import './Authenication/selectionButton.css';

export class SelectionButton extends Component {
  constructor() {
    super();
    this.state = {
      selected: "btn1"
    };
  }

  changeColor = (btn) => {
    this.setState({ selected: btn });
  };

  render() {
    return (
      <div className="selection-button">
        <p> Sort by </p>
        <div className="buttons">
          <button
            id="leftBtn"
            className={
              this.state.selected === "btn1" ? "selected" : "notSelected"
            }
            onClick={() => this.changeColor("btn1")}
          >
            {" "}
            Most popular{" "}
          </button>
          <button
            className={
              this.state.selected === "btn2" ? "selected" : "notSelected"
            }
            onClick={() => this.changeColor("btn2")}
          >
            {" "}
            Highest rating{" "}
          </button>
        </div>
      </div>
    );
  }
}
