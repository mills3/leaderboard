import React from 'react';
import './InfoModal.css';

const InfoModal = (props) => {
  let toggle = props.modalOpen ? 'modalOpen' : '';

  return (
    <div className={`modal ${toggle}`} onClick={props.handleClick}>
      <h1>Build A Camper Leaderboard</h1>

      <h3>
        #1. I can see a table of the Free Code Camp campers who have earned the most brownie points in the past 30 days.
      </h3>
      <h3>
        #2.  I can see how many brownie points they have earned in the past 30 days, and how many they have earned total.
      </h3>
      <h3>
        #3.  I can toggle between sorting the list by how many brownie points they have earned in the past 30 days and by how many brownie points they have earned total.
      </h3>
    </div>
  );
}

export default InfoModal;
