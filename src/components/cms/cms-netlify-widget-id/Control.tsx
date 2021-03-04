import React from "react";
import { nanoid } from "nanoid";
import { NetlifyCmsControlProps } from "../cms-netlify/types";

export default class Control extends React.Component<NetlifyCmsControlProps> {
  componentDidMount() {
    const value = this.props.value ? this.props.value : nanoid();
    this.props.onChange(value);
  }

  handleChange(event) {
    this.props.onChange(event.target.value.trim());
  }

  render() {
    return (
      <input
        data-testid="input"
        style={{
          display: "inline-flex",
          width: "auto",
          padding: 0,
          paddingLeft: 10,
          border: 0,
          backgroundColor: "transparent",
          color: "#9E9E9E",
        }}
        type="text"
        disabled={true}
        value={this.props.value}
        onChange={this.handleChange}
        className={this.props.classNameWrapper}
      />
    );
  }
}
