import React, { Component } from "react";
import axios from 'axios';

import CardssDetails from "./card";




export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aadhar: [],
      
     
    };
  }
componentDidMount() {
    axios.get('http://localhost:4000/aadhar/')
      .then(res => {
        console.log(res)
        this.setState({
         aadhar: res.data
        }); console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  
 
 
 card() { return this.state.aadhar.map((res, i) => {
    return <CardssDetails obj={res} key={i}  />;
  });

  }
  render () {
    
    return (
     
      <div>
      
      
   
   <table className="table2">   
   {this.card()}
  </table>
</div>
  
    )
  }
}