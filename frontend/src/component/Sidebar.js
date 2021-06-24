import React from 'react'
import {Container , Row , Col , Card , ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (

    <Row className="mt-3">
      <Col >
        <Card >
          <br></br>
          <Card.Title className="text-center"><h4 style={{ color: 'orange' }}>หมวดหมู่</h4></Card.Title>
          <Card.Body>
            <ListGroup variant="flush">
            <ListGroup.Item >sasas</ListGroup.Item>
            <ListGroup.Item>sasas</ListGroup.Item>
            <ListGroup.Item>sasas</ListGroup.Item>
            <ListGroup.Item>sasas</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>


  )
}

export default Sidebar
