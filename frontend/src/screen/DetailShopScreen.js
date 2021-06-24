import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form ,Container } from 'react-bootstrap'
import { listShopDetails } from '../actions/shopActions'

const DetailProductScreen = ({ match }) => {

  const dispatch = useDispatch()

  const shopDetails = useSelector((state) => state.shopDetails)
  const { shop } = shopDetails

  useEffect(() => {
    if (!shop._id || shop._id !== match.params.id) {
      dispatch(listShopDetails(match.params.id))
    }
  }, [dispatch, match, shop])

  return (

    <Container>
      <Row className="mt-5 mb-5">
          <Col md={3}>
            <Image src={shop.image} alt={shop.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{shop.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>เบอร์โทรศัพท์ :{shop.phone}</ListGroup.Item>
              <ListGroup.Item>ที่ตั้ง :{shop.no}</ListGroup.Item>
              <ListGroup.Item>
                รายละเอียด: {shop.descript}
              </ListGroup.Item>
            </ListGroup>
          </Col>
      </Row>
    </Container>
  )
}

export default DetailProductScreen
