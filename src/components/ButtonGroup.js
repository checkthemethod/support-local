import React from 'react';

const ButtonGroup = ({ toggleView }) => (
  <div className="btn-group " role="group" aria-label="Basic example">
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => toggleView("list")}
    >
      <i className="far fa-list mr-2"></i>{"  "}List
    </button>
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => toggleView("grid")}
    >
      <i className="fa fa-th mr-2"></i> Grid
    </button>
    {/* <button
                type="button"
                className="btn btn-secondary"
                onClick={() => toggleView("map")}
              >
                Map
              </button> */}
  </div>
);

export default ButtonGroup;