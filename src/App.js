import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/style/style.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreateAadhar from './Components/create'
import EditAadhar from './Components/edit'
import AadharList from './Components/list'
import Home from './Components/Admin/home'
function App() {
  return (
    <div className="App">
     
      <Router>
        <header className="App-header">
          <Navbar className="nav">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-aadhar'} className="nav-link">
                  <img src={'https://tse4.mm.bing.net/th?id=OIP.lv1GEgbuoKDrcbINiKSqTAHaKY&pid=Api&P=0'}
alt="pic" height={80} width={80}/>                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
              <Nav>
                  <Link to={'/Home'} className="nav-link" style={{color:"white",fontStyle:"italic"}}>
                   <b>Home</b>
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-aadhar'} className="nav-link" style={{color:"white",fontStyle:"italic"}}>
                  <b> Create Aadhar</b>
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/aadhar-list'} className="nav-link" style={{color:"white",fontStyle:"italic"}}>
                    <b>Aadhar List</b>
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                
                  
                  <Route
                    exact
                    path="/create-aadhar"
                    element = {<CreateAadhar/>}></Route>
                  
                  <Route
                    exact
                    path="/edit-aadhar/:id"
                    element = {<EditAadhar/>}></Route>
                  
                  <Route
                    exact
                    path="/aadhar-list"
                    element = {<AadharList/>}></Route>
                    <Route
                    exact
                    path="/Home"
                    element = {<Home/>}></Route>
                  
                  
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}
export default App