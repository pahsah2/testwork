import React, { useState, useEffect } from 'react'
import { Form, Button, Row,Col ,  Container , Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { createShop } from '../actions/shopActions'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
const AddShopScreen = ({history}) => {
  const dispatch = useDispatch()

  const [name , setName] = useState('')
  const [image  , setImage] = useState('')
  const [descript , setDescript] = useState('')
  const [phone , setPhone] = useState('')
  const [no , setNo] = useState('')
  const [uploading, setUploading] = useState(false)
  const shopCreate = useSelector((state) => state.shopCreate)
  const { shop , successShopCreate } = shopCreate

  useEffect(() => {
    if(successShopCreate) {
      history.push('/dashboard')
    }
  }, [dispatch , history , shop , successShopCreate])

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

  const createHandler = (e) => {
    e.preventDefault()
    dispatch(
      createShop(
        name,
        image,
        descript,
        phone,
        no,
      )
    )
  }


  return (
    <Container>
      <Row className="mb-3 mt-3">
      <Col>
      <h2>เพิ่ม ร้านค้า</h2>
      <Form onSubmit={createHandler}>
        <Form.Group controlId="name">
          <Form.Label>ชื่อร้าน</Form.Label>
          <Form.Control
            type="name"
            placeholder="ชื่อร้าน"
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

          <Form.Group controlId="Phone" className="mt-3">
            <Form.Label>เบอร์โทรศัพท์</Form.Label>
              <Form.Control
                type="telephone"
                placeholder="เบอร์โทรศัพท์"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}>
              </Form.Control>
          </Form.Group>

          <Form.Group controlId="No">
            <Form.Label>ที่ตั้งร้านค้า</Form.Label>
            <Form.Control
              type="No"
              placeholder="ที่ตั้งร้านค้า"
              value={no}
              onChange={(e) => setNo(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <br></br>
          <Button type="submit" variant="primary">
            เพิ่มร้านค้า
          </Button>
      </Form>
      </Col>
    </Row>
    </Container>
  )
}

export default AddShopScreen
