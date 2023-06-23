import React, {Component} from 'react';
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
// import { render } from 'timeago.js';

class Nba extends React.Component {
    constructor(props){
        super(props)
        this.state={
          playerName: null,
          year: null,
          playerStats: {}
        }
      }
    
    handleSubmit = (e) => {
      e.preventDefault();
      var theyear = document.getElementById('year').value
      this.getPlayerId(theyear)
      console.log(theyear)
      console.log(this.state.playerName)
    }
    
    handleChange = (event) => {
      const replace = event.target.value.split(" ").join("_");
      if(replace.length > 0){
        this.setState({playerName: replace})
      } else {
        alert("Please type players name!")
      }
    }

    handleyearChange = (event) => {
      this.setState({year: event})
    }

    
      getPlayerId = (theyear) => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
        .then(async res => {
          // console.log(res.data.data)
          if(res.data.data[0] === undefined){
            alert("This player is either injured or hasn't played yet!")
          } else if(res.data.data.length > 1){
            alert("Pleases specify the name more!")
          } else{
            await this.getPlayerStats(res.data.data[0].id, theyear)
    
          }
        }).catch(err => {
          console.log(err)
        })
      }
    
      getPlayerStats = (playerId, theyear) => {
        
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=${theyear}&player_ids[]=${playerId}`)
        .then(async res => {
          console.log(res.data.data)
          console.log(this.state.year)
          this.setState({ playerStats: res.data.data[0]})
        }).catch(err => {
          console.log(err)
        })
      }
    render () {
      return(
        <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
              <div className="App">
                <form className="loginBox" onSubmit={this.handleSubmit}>
                <label className="profileInfo">
                Name
                <input 
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="please enter players name"
                />
                </label>
                <label className="profileInfo">
                Year
                <input 
                  type="text"
                  id = 'year'
                  value={this.state.value}
                  onChange={this.handleyearChange}
                  placeholder="please enter the year"
                />
                </label>
                <input type="submit" value="Submit"/>
                </form >
                <div className="post">
                  <div className="postWrapper">
                    <div className="postTop">
                      <div className="postTopLeft">
                        <span className="postUsername">{this.state.playerName}</span>
                        <span className="postDate"></span>
                      </div>
                      <div className="postTopRight">
                      </div>
                    </div>
                    <div className="postCenter">
                      <span className="postText">games played: {this.state.playerStats["games_played"]}</span><br />
                      <span className="postText">points averaged: {this.state.playerStats["pts"]}</span><br />
                      <span className="postText">rebounds averaged: {this.state.playerStats["reb"]}</span><br />
                      <span className="postText">assists averaged: {this.state.playerStats["ast"]}</span>
                      <img className="postImg" src="" alt="" />
                    </div>
                    <div className="postBottom">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Rightbar/>
        </div>
      </>
       
  );
}
}

export default Nba;


