import React, { useEffect, useState } from "react";
import "./Filters.scss";

const Filters = (props) => {
  const handleChange = (event) => {
    props.handleFilter({ id: event.target.id, value: event.target.value });
  };

  return (
    <>
      <form className="Filters__form">
        <input
          className="Filters__input"
          type="text"
          id="name"
          value={props.input} //guarda el valor que se ha introducido
          onChange={handleChange}
        />
        <label htmlFor="gender">Elige el género</label>
        <select id="gender" onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </form>
    </>
  );
};
export default Filters;

Filters.defaultProps = {
  type: "text",
};
