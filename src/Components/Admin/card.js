import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';



export default class CardsDetails extends Component {
render(){
  return (
<tr className="tr2">
<td className="td2">
    <Card style={{width:'18rem'}} className="tb2">
     
      <Card.Body className="cardbody">
        <Card.Title >
       <h6 ><img src={'https://tse4.mm.bing.net/th?id=OIP.lv1GEgbuoKDrcbINiKSqTAHaKY&pid=Api&P=0'}
        alt="pic" height={30} width={30}/><p className="title">GOVERNMENT OF INDIA</p></h6></Card.Title>
        <Card.Text>
   
       <b>{this.props.obj.name} </b><br/>
       <b>{this.props.obj.dateOfbirth}</b><br/>
       <b> {this.props.obj._id}</b>
       <img src={'https://tse3.mm.bing.net/th?id=OIP.8GITPU9X6qcG6ESNNoBcjwHaHa&pid=Api&P=0' } alt="img" height={60} width={60}/>
    

             

        </Card.Text>
       
        
      </Card.Body>
    </Card>
    </td>
    </tr>
  );
}}