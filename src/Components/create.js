import React, {Component} from "react";
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button';
import Slides from "./carousel"
import "./style/style.css"
import axios from 'axios';
export default class CreateAadhar extends Component {
  constructor(props) {
    super(props)
    // setting up functions
    this.onChangeAadharNumber = this.onChangeAadharNumber.bind(this);
    this.onChangeAadharName = this.onChangeAadharName.bind(this); 
    this.onChangeAadharDataOfBirth = this.onChangeAadharDataOfBirth.bind(this);
    this.onChangeAadharAddress = this.onChangeAadharAddress.bind(this);
    this.onChangeAadharEmail = this.onChangeAadharEmail.bind(this);
    this.onChangeAadharMobileNo = this.onChangeAadharMobileNo.bind(this);
    this.onChangeAadharlinkedPANno = this.onChangeAadharlinkedPANno.bind(this);
    this.onChangeAadharlinkedPassportNo = this.onChangeAadharlinkedPassportNo.bind(this);
    this.onChangeAadharlinkedBankAccountNo = this.onChangeAadharlinkedBankAccountNo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   // setting up state
    this.state = { 
      number: '',
      name: '',
      dataOfbirth: '',
      address: '',
      email: '',
      mobileno: '',
      linkedpanno: '',
      linkedpassportno: '',
      linkedbankaccountno: ''
    }
  }
  onChangeAadharNumber(e) {
    this.setState({ number: e.target.value})
  }
  onChangeAadharName(e) {
    this.setState({ name: e.target.value})
  }
  onChangeAadharDataOfBirth(e) {
    this.setState({ dataOfbirth: e.target.value})
  }
  onChangeAadharAddress(e) {
    this.setState({ address: e.target.value})
  }
  onChangeAadharEmail(e) {
    this.setState({ email: e.target.value})
  }
  onChangeAadharMobileNo(e) {
    this.setState({ mobileno: e.target.value})
  }
  onChangeAadharlinkedPANno(e) {
    this.setState({ linkedpanno: e.target.value})
  }
  onChangeAadharlinkedPassportNo(e) {
    this.setState({ linkedpassportno: e.target.value})
  }
  onChangeAadharlinkedBankAccountNo(e) {
    this.setState({ linkedbankaccountno: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault()
    const aadharObject = {
      number: this.state.number,
      name: this.state.name,
      dataOfbirth: this.state.dataOfbirth,
      address: this.state.address,
      email: this.state.email,
      mobileno: this.state.mobileno,
      linkedpanno: this.state.linkedpanno,
      linkedpassportno: this.state.linkedpassportno,
      linkedbankaccountno: this.state.linkedbankaccountno
    }
    axios.post('http://localhost:4000/aadhar/create-aadhar', aadharObject)
      .then(res => console.log(res.data));
    this.setState({ number: '', name: '', dataOfbirth: '', address: '', email: '', mobileno: '', linkedpanno: '', linkedpassportno: '', linkedbankaccountno: '' })
  }
   render() {
     return (<div className="form1">
      
       <form  onSubmit={this.onSubmit} className="form-inside">
       <h1 style={{color:"blue"}}>Aadhaar Registration</h1>
       
          <label className="num">Number</label><br></br>
        <input type="text" className="gana" value={this.state.number} onChange={this.onChangeAadharNumber} /> <br></br><br></br>
        
       
          <label>Name</label><br></br>
          <input type="text" value={this.state.name} onChange={this.onChangeAadharName} /> <br></br><br></br>
        
          
          <label>Date of Birth</label><br></br>
          <input type="date" value={this.state.dataOfbirth} onChange={this.onChangeAadharDataOfBirth} /> <br></br><br></br>
        

          <label>Address</label><br></br>
          <input type="text" value={this.state.address} onChange={this.onChangeAadharAddress} /> <br></br><br></br>
        
       
          <label>Email</label><br></br>
          <input type="email" value={this.state.email} onChange={this.onChangeAadharEmail} /> <br></br><br></br>
        
       
          <label>MobileNo</label><br></br>
          <input type="text" value={this.state.mobileno} onChange={this.onChangeAadharMobileNo} /> <br></br><br></br>
        
       
          <label>linkedPANno</label><br></br>
          <input type="text" value={this.state.linkedpanno} onChange={this.onChangeAadharlinkedPANno} /> <br></br><br></br>
        
       
          <label>linkedPassportNo</label><br></br>
          <input type="text" value={this.state.linkedpassportno} onChange={this.onChangeAadharlinkedPassportNo} /> <br></br><br></br>
      
          <label>linkedBankAccountNo</label><br></br>
          <input type="text" value={this.state.linkedbankaccountno} onChange={this.onChangeAadharlinkedBankAccountNo} /> <br></br><br></br>
        
          <button className="btn" type="submit" style={{color:'blue'}}>
          Create Aadhar
        </button>
       
      </form>
      <div className="flag">
        <img src={'https://tse3.mm.bing.net/th?id=OIP.LY-GM3Gch9b6WQZCzWa5eQHaDq&pid=Api&P=0'} alt="pic" />
       <h1>Unique Identification Authority of India - Aadhaar</h1> 
         <Slides/>
      </div>
     
    </div>);
  }
}