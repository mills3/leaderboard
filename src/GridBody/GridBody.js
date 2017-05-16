import React from 'react';
import './GridBody.css';

const GridBody = (props) => {
  let monthActive = '';
  let allTimeActive = '';
  if(props.byMonth) {
    monthActive = 'active';
  } else {
    allTimeActive = 'active'
  }
  const mapped = props.data.map((person, ind) => {
    return (
      <div className="personRow" key={ind}>
        <div className="personPosition">{ind + 1}</div>
        <a className="personName" href={"https://www.freecodecamp.com/"+person.username} target="_blank"><img src={person.img} alt="profile" /><p>{person.username}</p></a>
        <div className={`personRecentScore  ${monthActive}`}>{person.recent}</div>
        <div className={`personAllTimeScore  ${allTimeActive}`}>{person.alltime}</div>
      </div>
    )
  });
  return (
    <div className="gridBody">
      {mapped}
    </div>
  );
}

export default GridBody;
