import React, { Component } from "react";
import TableDemo from "./TableDemo";
import ListDemo from "./ListDemo";

export default class Frah extends Component {
  render() {
    return (
      <>
        <h1>This is Fragment Demo!</h1> <br />
        <TableDemo /> <br />
        <ListDemo />
      </>
    );
  }
}