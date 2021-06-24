import React, { useEffect } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import Section1 from '../component/Section1'
import Product from '../component/Product'
import { listProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../component/Sidebar'
const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container>
    <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={3} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
    </Row>
    </Container>
  )
}

export default HomeScreen
