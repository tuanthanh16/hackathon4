import { Fragment, useState, useEffect } from "react";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.nav}>
      <label>From</label>
      <select name="origin">
        <option value="">--Please choose an option--</option>
        <option value="VLC">Valencia</option>
        <option value="BER">Berlin</option>
      </select>
      <label>To</label>
      <select name="destination">
        <option value="">--Please choose an option--</option>
        <option value="VLC">Valencia</option>
        <option value="BER">Berlin</option>
      </select>
    </div>
  );
};

export default NavBar;
