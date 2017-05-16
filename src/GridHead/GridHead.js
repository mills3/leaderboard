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
      <div className={`monthScore ${activeMonth}`} onClick={props.handleRecentClick}><p>Recent</p></div>
      <div className={`allTimeScore ${activeAllTime}`} onClick={props.handleAllTimeClick}><p>All Time</p></div>
    </div>
  );
}

export default GridHead;
