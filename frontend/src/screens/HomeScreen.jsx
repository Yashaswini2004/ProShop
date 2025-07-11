import { Row,Col,Container } from "react-bootstrap";
import "../products";
import { useEffect,useState } from "react";
import products from "../products";
import axios from "axios";
import Products from "../component/Products";
function HomeScreen() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{
      const {data}=await axios.get('http://localhost:5000/api/products');
      setProducts(data);
    };
    fetchProducts();
  },[])
    return ( 
        <>
        <Container>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </Container>
        </>
     );
}

export default HomeScreen;