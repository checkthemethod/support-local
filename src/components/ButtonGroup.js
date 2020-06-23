import React from 'react';

const ButtonGroup = ({ toggleView }) => (
  <div className="btn-group " role="group" aria-label="Basic example">
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => toggleView("list")}
    >
      <i className="far fa-list"></i>
      <span className="btn-text ml-2">List</span>
    </button>
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => toggleView("grid")}
    >
      <i className="fa fa-th"></i>
      <span className="btn-text ml-2">Grid</span>
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