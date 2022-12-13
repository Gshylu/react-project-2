import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AadharTableRow from './table';


export default class AadharList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aadhar: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/aadhar/')
      .then(res => {
        this.setState({
          aadhar: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.aadhar.map((res, i) => {
      return <AadharTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>dataOfbirth</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Linked Pan No</th>
            <th>Linked Passport No</th>
            <th>Linked Bankaccount No</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}

