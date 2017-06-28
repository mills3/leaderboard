import React from 'react';
import './GridHead.css';

const GridHead = (props) => {
  let activeMonth = '';
  let activeAllTime = '';

  if(props.byMonth) {
    activeMonth = 'activeHeading';
  } else {
    activeAllTime = 'activeHeading';
  }

  return (
    <div className="gridHead">
      <div className="position">#</div>
      <div className="name">Name</div>
      <div className={`monthScore ${activeMonth}`} onClick={props.handleRecentClick}>Recent</div>
      <div className={`allTimeScore ${activeAllTime}`} onClick={props.handleAllTimeClick}>Ever</div>
    </div>
  );
}

export default GridHead;
