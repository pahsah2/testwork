import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form ,Container } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'

const DetailProductScreen = ({ match }) => {

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
    }
  }, [dispatch, match, product])

  return (

    <Container>
      <Row className="mt-5 mb-5">
      <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
             <p>  หมวดสินค้า : {product.category && product.category.categoryname} </p>
             <p>  คำอธิคำอธิบายหมวดหมู่สินค้า : {product.category && product.category.categorydescript} </p>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>ราคา :{product.price} บาท &nbsp; หน่วย : {product.type}</ListGroup.Item>

              <ListGroup.Item>
                รายละเอียด: {product.descript}
              </ListGroup.Item>
            </ListGroup>
          </Col>
      </Row>
    </Container>
  )
}

export default DetailProductScreen
