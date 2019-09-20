import React from 'react';

export default props => (
  <div className="form-group float-right" style={{ margin: "5px" }}>
    <input type="text" onChange={props.changeHandler} className="search form-control" placeholder="Search..." />
  </div >
)
