import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'
import Meta from '../components/Meta'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'
import { Link } from 'react-router-dom'
// import products from '../products'

const HomeScreen = () => {
  const keyword = useParams().keyword
  const pageNumber = useParams().pageNumber || 1
  console.log(pageNumber, 'page number')
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
  return (
    <Container>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger ' children={error} />
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ' '}
          />
        </>
      )}
    </Container>
  )
}

export default HomeScreen
