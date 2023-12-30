import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Rating from './Rating'

const Product = ({ product }) => {
  console.log(product.image, 'PRODUCT IMAGE')
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={`http://3.90.218.168:5000/${product.image}`} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
