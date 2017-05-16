import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Contact from './Contact/Contact';
import PageInfo from './PageInfo/PageInfo';
import GridHead from './GridHead/GridHead';
import GridBody from './GridBody/GridBody';
import Footer from './Footer/Footer';
import InfoModal from './InfoModal/InfoModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      leaderboardData: [],
      sortedByMonth: true,
      modalOpen: false
    }
  }

  componentDidMount = () => {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((resp) => resp.json())
      .then((data) => this.setState({leaderboardData: data, dataLoaded: true}))
  }

  sortByRecent = () => {
    this.setState({
      leaderboardData: this.state.leaderboardData.sort((a,b) => b.recent - a.recent),
      sortedByMonth: true
    })
  }

  sortByAllTime = () => {
    this.setState({
      leaderboardData: this.state.leaderboardData.sort((a,b) => b.alltime - a.alltime),
      sortedByMonth: false
    })
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  closeModal = () => {
    this.setState({modalOpen: false});
  }

  render() {
    if(this.state.dataLoaded) {
      return (
        <div className="App">
          <div className="bgImage"></div>
          <Header />
          <Contact />
          <PageInfo handleClick={this.toggleModal}/>
          <GridHead handleRecentClick={this.sortByRecent} handleAllTimeClick={this.sortByAllTime} byMonth={this.state.sortedByMonth}/>
          <GridBody data={this.state.leaderboardData} byMonth={this.state.sortedByMonth}/>
          <InfoModal modalOpen={this.state.modalOpen} handleClick={this.closeModal}/>
          <Footer />
        </div>
      );
    }

    return (
      <div className="App">
        <h1 className="loading">Loading...</h1>
      </div>
    )

  }
}

export default App;
