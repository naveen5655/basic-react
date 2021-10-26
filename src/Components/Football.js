import React,{Component} from 'react'
class Football extends React.Component {
    shoot() {
      alert("Great Shot!");
    }
    render() {
      return (
     
        <div >
              <button onClick={this.shoot} style={{color:'red'}}>Take the shot </button>
        </div>
        
      );
    }
  }
  export default Football
