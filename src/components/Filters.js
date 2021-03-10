import React, { useEffect, useState } from "react";
import "./Filters.scss";

const Filters = (props) => {
  const handleChange = (event) => {
    props.handleFilter({ key: event.target.name, value: event.target.value });
  };

  return (
    <>
      <form className="Filters__form">
        <input
          className="Filters__input"
          type="text"
          name="character"
          value={props.input} //guarda el valor que se ha introducido
          onChange={handleChange}
        />
        <div>
          <label>Es humano </label>
          <input
            className="Filters__input"
            type="checkbox"
            name="human"
            value={props.species} //guarda el valor que se ha introducido
            onCheck={handleChange}
          />
        </div>
      </form>
    </>
  );
};
export default Filters;

Filters.defaultProps = {
  type: "text",
};
