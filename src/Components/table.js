import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
export default class AadharTableRow extends Component {   
    constructor(props) {
    super(props);
    this.deleteAadhar = this.deleteAadhar.bind(this);
}
deleteAadhar() {
    axios.delete('http://localhost:4000/aadhar/delete-aadhar/' + this.props.obj._id)
        .then((res) => {
            console.log('Aadhar successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
}
    render() {
        return (
            <tr>
                <td>{this.props.obj.number}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.dataOfbirth}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.mobileno}</td>
                <td>{this.props.obj.linkedpanno}</td>
                <td>{this.props.obj.linkedpassportno}</td>
                <td>{this.props.obj.linkedbankaccountno}</td>
                <td>
                    <Link className="edit-link" to={"/edit-aadhar/" + this.props.obj._id}>
                        Edit
                    </Link></td>
                    <td>
                    <Button onClick={this.deleteAadhar} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}