import { Row,Col } from "react-bootstrap";
import "../products";
import products from "../products";
import Products from "../component/Products";
function HomeScreen() {
    return ( 
        <>
        <h1>Latest Products</h1>
         <Row>
           {products.map((product)=>(
           <Col   sm={12} md={6} lg={4} xl={3}>
           <Products product={product}/>
           </Col>
           ))}
         </Row>
        </>
     );
}

export default HomeScreen;