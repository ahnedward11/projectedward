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
      // this.setState({year:theyear})
      this.getPlayerId(theyear)
      console.log(theyear)
      console.log(this.state.playerName)
    }
    
    handleChange = (event) => {
      this.id = event;
      const replace = event.target.value.split(" ").join("_");
      if(replace.length > 0){
        this.setState({playerName: replace})
      } else {
        alert("Please type players name!")
      }
    }

    handleyearChange = (event) => {
      console.log("In handleyear")
      // this.setState({year: theyear})
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
          console.log(playerId)
          this.setState({srcc: `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203500.png`} )
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
              <div >
              <div className="loginRight">
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
                </div>
                </div>
                <div className="post">
                  <div className="postWrapper">
                    <div className="postTop">
                      <div className="postTopLeft">
                      {/* <img
                        className="postProfileImg"
                        src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203500.png`}
                        alt=""
                      /> */}
                        <span className="postUsername">{this.state.playerName}</span>
                        <span className="postDate">{this.state.playerStats["season"]}</span>
                      </div>
                      <div className="postTopRight">
                      </div>
                    </div>
                    <div className="postCenter">
                      <span className="postText">Games Played: {this.state.playerStats["games_played"]}</span><br />
                      <span className="postText">Points Averaged: {this.state.playerStats["pts"]}</span><br />
                      <span className="postText">Rebounds Averaged: {this.state.playerStats["reb"]}</span><br />
                      <span className="postText">Assists Averaged: {this.state.playerStats["ast"]}</span><br />
                      <span className="postText">Field Goal Percentage: {this.state.playerStats["fg_pct"]}</span><br />
                      <span className="postText">Steals Averaged: {this.state.playerStats["stl"]}</span><br />
                      <span className="postText">Blocks Averaged: {this.state.playerStats["blk"]}</span><br />
                      <img className="postImg" src="" alt="" />
                    </div>
                    {/* <div className="postBottom">
                      </div> */}
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


