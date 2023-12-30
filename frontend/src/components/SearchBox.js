import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  //   const history = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history(`/search/${keyword}`)
    } else {
      history('/')
    }
  }
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <Form.Group style={{ display: 'flex' }}>
            <Form.Control
              type='text'
              name='q'
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='Search Products...'
              className='mr-sm-2 ml-sm-5'
            ></Form.Control>
            <Button
              type='submit'
              variant='outline-success inline'
              className='p-2'
            >
              Search
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default SearchBox
