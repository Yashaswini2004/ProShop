import { Link, useParams } from 'react-router-dom';
import products from '../products';
import { useState,useEffect } from 'react';
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Rating from '../component/Rating';
import { Card } from 'react-bootstrap';
import axios from 'axios';
function ProductScreen() {
  const [product,setProduct]=useState({});
  const { id: productId } = useParams();
  useEffect(()=>{
   const fetchProduct=async()=>{
    const {data}=await axios.get(`http://localhost:5000/api/products/${productId}`);
    setProduct(data);
   }
   fetchProduct();
  },[productId])
  return (
   <>
   <Link className='btn btn-light my-3' to="/">
   Go Back
   </Link>
   <Row>
    <Col md={5}>
    <img src={product.image} alt={product.name} fluid/>
    </Col>
    <Col md={4}>
    <ListGroup variant='flush'>
      <ListGroup.Item>
        <h3>{product.name}</h3>
      </ListGroup.Item>
    <ListGroup.Item>
      <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
    </ListGroup.Item>
    <ListGroup.Item>
      Price: ${product.price}
    </ListGroup.Item>
    <ListGroup.Item>
      Description : {product.description}
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
        <Col>Status:</Col>
        <Col>
        <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
        </Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Button className='btn-block' type='button' disabled={product.countInStock ==0}>Add To Cart</Button>
    </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col md={3}>
    <Card>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col>Price:</Col>
            <Col>
            <strong>${product.price}</strong></Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>
   </Row>
   </>
  );
}

export default ProductScreen;
