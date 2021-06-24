import React, { useState, useEffect } from 'react'
import { Form, Button, Row,Col ,  Container , Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listShopDetails , updateShop } from '../actions/shopActions'
import axios from 'axios'

import { SHOP_UPDATE_RESET } from '../constants/shopConstants'

const EditShopScreen = ({ match, history }) => {
  const shopId = match.params.id

  const [name , setName] = useState('')
  const [image  , setImage] = useState('')
  const [descript , setDescript] = useState('')
  const [phone , setPhone] = useState('')
  const [no , setNo] = useState('')
  const [uploading, setUploading] = useState(false)
  const dispatch = useDispatch()

  const shopDetails = useSelector((state) => state.shopDetails)
  const { shop } = shopDetails

  const shopUpdate = useSelector((state) => state.shopUpdate)
  const { success: successShopUpdate } = shopUpdate

  useEffect(() => {
    if(successShopUpdate) {
      dispatch({type: SHOP_UPDATE_RESET})
      history.push('/dashboard')
    }else {
      if(!shop.name || shop._id !== shopId){
          dispatch(listShopDetails(shopId))
      } else {
      setName(shop.name)
      setDescript(shop.descript)
      setPhone(shop.phone)
      setNo(shop.no)
    }
  }
}, [dispatch , history , shopId , shop , successShopUpdate])

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

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateShop({
        _id: shopId,
        name,
        image,
        descript,
        phone,
        no,
      })
    )
  }


  return (
      <Container>
        <Row className="mb-3 mt-3">
        <Col>
        <h2> แก้ไข ร้านค้า</h2>
        <Form onSubmit={submitHandler}>
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
                  type="phone"
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
              แก้ไข
            </Button>
        </Form>
        </Col>
      </Row>
      </Container>
  )
}

export default EditShopScreen
