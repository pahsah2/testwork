import React, { useState, useEffect } from 'react'
import { Form, Button, Row,Col ,  Container , Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { createProduct } from '../actions/productActions'
import axios from 'axios'


const AddProductScreen = ({history}) => {
  const dispatch = useDispatch()

  const [name , setName] = useState('')
  const [image  , setImage] = useState('')
  const [descript , setDescript] = useState('')
  const [category , setCategory] = useState('')
  const [categoryname , setCategoryname] = useState('')
  const [categorydescript , setCategorydescript] = useState('')
  const [price , setPrice] = useState('')
  const [type , setType] = useState('')

  const productCreate = useSelector((state) => state.productCreate)
  const { product , successProductCreate } = productCreate

  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if(successProductCreate) {
      history.push('/dashboard')
    }
  }, [dispatch , history , product , successProductCreate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProduct(
        name,
        image,
        descript,
        category,
        price,
        type
      )
    )
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  return (
      <Container>
        <Row className="mb-3 mt-3">
        <Col>
        <h2> เพิ่มสินค้า</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>ชื่อสินค้า</Form.Label>
            <Form.Control
              type="name"
              placeholder="ชื่อสินค้า"
              value={name}
              onChange={(e) => setName(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading}
            </Form.Group>

          <Form.Group controlId="Descript">
            <Form.Label>รายละเอียด</Form.Label>
            <Form.Control
              type="descript"
              placeholder="รายละเอียด"
              value={descript}
              onChange={(e) => setDescript(e.target.value)}>
            </Form.Control>
          </Form.Group>

            <Form.Group controlId="Categoryname" className="mt-3">
              <Form.Label>ชื่อหมวดหมู่  &nbsp;</Form.Label>
                <select className="form-select" aria-label="Default select example" value={categoryname} onChange={(e) => setCategoryname(e.target.value)}>
                  <option value="ขนมขบเคี้ยว">ขนมขบเคี้ยว</option>
                  <option value="นม">นม</option>
                  <option value="เครื่องดื่มอัดลมและน้ำหวาน">เครื่องดื่มอัดลมและน้ำหวาน</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
            </Form.Group>

            <Form.Group controlId="Categorydescript" className="mt-3">
              <Form.Label>คำอธิบายหมวดหมู่</Form.Label>
              <Form.Control
                type="categorydescript"
                placeholder="คำอธิคำอธิบายหมวดหมู่"
                value={categorydescript}
                onChange={(e) => setCategorydescript(e.target.value)}>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="Price">
              <Form.Label>ราคา</Form.Label>
              <Form.Control
                type="price"
                placeholder="ราคา"
                value={price}
                onChange={(e) => setPrice(e.target.value)}>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="Type">
              <Form.Label>หน่วยสินค้า</Form.Label>
              <Form.Control
                type="Type"
                placeholder="หน่วยสินค้า"
                value={type}
                onChange={(e) => setType(e.target.value)}>
              </Form.Control>
            </Form.Group>
            <br></br>
            <Button type="submit" variant="primary">
              เพิ่มสินค้า
            </Button>
        </Form>
        </Col>
      </Row>
      </Container>
  )
}

export default AddProductScreen
