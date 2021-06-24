import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../component/Sidebar'
import {Container , Row , Col , Table , Button,} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { listProducts ,  deleteProduct  } from '../actions/productActions'
import { listShops , deleteShop  } from '../actions/shopActions'

const DashboardScreen = ({ history , match}) => {

  const productId = match.params.id
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { products }  = productList

  const productDelete = useSelector((state) => state.productDelete)
  const { success: successProductDelete } = productDelete

  const shopList = useSelector((state) => state.shopList)
  const { shops }  = shopList

  const shopDelete = useSelector((state) => state.shopDelete)
  const { success: successShopDelete } = shopDelete


  useEffect(() => {
    dispatch(listProducts())
    dispatch(listShops())
  },[dispatch , successProductDelete  , successShopDelete ])


  const deleteHandler = (id) => {
    if(window.confirm('ต้องการลบใช่หรือไม่')){
      dispatch(deleteProduct(id))
    }
  }
  const deleteShopHandler = (id) => {
    if(window.confirm('ต้องการลบใช่หรือไม่')){
      dispatch(deleteShop(id))
    }
  }


  return (
    <Container>
      <Row className="mt-3">
      <Col>
        <h2>ร้านค้า</h2>
          <LinkContainer to={`/shop/add`}>
            <Button className="my-3">
              <i className="fa fa-plus"></i> เพิ่มร้าน
            </Button>
          </LinkContainer>
        <Table bordered responsive hover className="table-lg">
          <thead>
            <tr>
              <th>รูปภาพ</th>
              <th>ร้านค้า</th>
              <th>คำอธิบายร้านค้า</th>
              <th>เบอร์ที่ติดต่อ</th>
              <th>ที่อยู่</th>
              <td>แก้ไข</td>
              <td>ลบ</td>
            </tr>
          </thead>
          <tbody>
          {shops.map((shop) => (
              <tr key={shop._id}>
                <tr><img src={shop.image} alt="product image" height="30%" width="30%" /></tr>
                <td><Link to={`/shop/${shop._id}`}>
                        {shop.name}
                      </Link></td>
                <td>{shop.descript}</td>
                <td>{shop.phone}</td>
                <td>{shop.no}</td>
                <td><LinkContainer to={`/shop/${shop._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fa fa-edit"></i>
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  {
                  <Button
                      type="button"
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteShopHandler(shop._id)}
                  >
                  <i className="fa fa-trash"></i>
                  </Button>
                  }
                </td>
              </tr>
            ))}
            </tbody>
        </Table>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2>สินค้า</h2>

            <LinkContainer to={`/product/add`}>
              <Button className="my-3">
            <i className="fa fa-plus"></i> เพิ่มสินค้า
              </Button>
            </LinkContainer>

        <Table bordered responsive hover className="table-lg">
          <thead>
            <tr>
              <th>รูปภาพ</th>
              <th>สินค้า</th>
              <th>รายละเอียด</th>
              <th>หมวดหมู่</th>
              <th>คำอธิคำอธิบายหมวดหมู่</th>
              <th>ราคา</th>
              <th>หน่วยสินค้า</th>
              <td>แก้ไข</td>
              <td>ลบ</td>
            </tr>
          </thead>
          <tbody>
          {products.map((product) => (
              <tr key={product._id}>
                <tr><img src={product.image} alt="product image" height="100%" width="100%" /></tr>
                <td><Link to={`/product/${product._id}`}>
                        {product.name}
                      </Link></td>
                <td>{product.descript}</td>
                <td>{product.category && product.category.categoryname}</td>
                <td>{product.category && product.category.categorydescript}</td>
                <td>{product.price}</td>
                <td>{product.type}</td>
                <td><LinkContainer to={`/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fa fa-edit"></i>
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  {
                  <Button
                      type="button"
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                  >
                  <i className="fa fa-trash"></i>
                  </Button>
                  }
                </td>
              </tr>
            ))}
            </tbody>
        </Table>
      </Col>

    </Row>
  </Container>
  )
}

export default DashboardScreen
