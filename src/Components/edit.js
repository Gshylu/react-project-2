import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditAadhar extends Component {
  constructor(props) {
    super(props)
    this.onChangeAadharNumber = this.onChangeAadharNumber.bind(this);
    this.onChangeAadharName = this.onChangeAadharName.bind(this); 
    this.onChangeAadharAge = this.onChangeAadharAge.bind(this);
    this.onChangeAadharAddress = this.onChangeAadharAddress.bind(this);
    this.onChangeAadharEmail = this.onChangeAadharEmail.bind(this);
    this.onChangeAadharMobileNo = this.onChangeAadharMobileNo.bind(this);
    this.onChangeAadharlinkedPANno = this.onChangeAadharlinkedPANno.bind(this);
    this.onChangeAadharlinkedPassportNo = this.onChangeAadharlinkedPassportNo.bind(this);
    this.onChangeAadharlinkedBankAccountNo = this.onChangeAadharlinkedBankAccountNo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   // state
    this.state = { 
      number: '',
      name: '',
      age: '',
      address: '',
      email: '',
      mobileno: '',
      linkedpanno: '',
      linkedpassportno: '',
      linkedbankaccountno: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/aadhar/edit-aadhar/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          number: res.data.number,
          name: res.data.name,
          age: res.data.age,
          address: res.data.address,
          email: res.data.email,
          mobileno: res.data.mobileno,
          linkedpanno: res.data.linkedpanno,
          linkedpassportno: res.data.linkedpassportno,
          linkedbankaccountno: res.data.linkedbankaccountno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeAadharNumber(e) {
    this.setState({ number: e.target.value})
  }
  onChangeAadharName(e) {
    this.setState({ name: e.target.value})
  }
  onChangeAadharAge(e) {
    this.setState({ age: e.target.value})
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
      age: this.state.age,
      address: this.state.address,
      email: this.state.email,
      mobileno: this.state.mobileno,
      linkedpanno: this.state.linkedpanno,
      linkedpassportno: this.state.linkedpassportno,
      linkedbankaccountno: this.state.linkedbankaccountno
    };
  axios.put('http://localhost:4000/aadhar/update-aadhar/' + this.props.match.params.id, aadharObject)
    .then((res) => {
      console.log(res.data)
      console.log('Aadhar successfully updated')
    }).catch((error) => {
      console.log(error)
    })
  // Redirect to Aadhar List 
  this.props.history.push('/aadhar-list')
  }


   render() {
     return (
     <div className="form-wrapper">
      <Form  onSubmit={this.onSubmit} className="form-wrapper">
        <Form.Group controlId="Name">
          <Form.Label>Number</Form.Label> <Form.Control type="text" value={this.state.number} onChange={this.onChangeAadharNumber} />
        </Form.Group>
         <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeAadharName} />
        </Form.Group>
          <Form.Group controlId="Name">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" value={this.state.age} onChange={this.onChangeAadharAge} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeAadharAddress} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeAadharEmail} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>MobileNo</Form.Label>
          <Form.Control type="text" value={this.state.mobileno} onChange={this.onChangeAadharMobileNo} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>linkedPANno</Form.Label>
          <Form.Control type="text" value={this.state.linkedpanno} onChange={this.onChangeAadharlinkedPANno} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>linkedPassportNo</Form.Label>
          <Form.Control type="text" value={this.state.linkedpassportno} onChange={this.onChangeAadharlinkedPassportNo} />
        </Form.Group>
       <Form.Group controlId="Name">
          <Form.Label>linkedBankAccountNo</Form.Label>
          <Form.Control type="text" value={this.state.linkedbankaccountno} onChange={this.onChangeAadharlinkedBankAccountNo} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Aadhar
        </Button>
      </Form>
    </div>);
  }
}
  



