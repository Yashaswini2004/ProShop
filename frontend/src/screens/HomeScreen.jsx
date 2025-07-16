import { Row,Col,Container } from "react-bootstrap";
import "../products";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Products from "../component/Products";
import Loader from "../component/Loader";
import Message from "../component/Message";
function HomeScreen() {
  
  const {data:products,isLoading,error}=useGetProductsQuery();
    return ( 
        <>
        {isLoading ? (
        <Loader/>
        ):error ?(
          <Message variant='danger'>
            {error.error}
          </Message>
        ):(
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
        )}
        
        </>
     );
}

export default HomeScreen;