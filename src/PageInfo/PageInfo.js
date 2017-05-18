import React from 'react';
import './PageInfo.css';

const PageInfo = (props) => {
  return (
    <div className="pageInfoBtn">
      <button onClick={props.handleClick}>About</button>
    </div>
  );
}

export default PageInfo;
