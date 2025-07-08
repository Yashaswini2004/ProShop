import { Card } from "react-bootstrap";
function Products({Product}) {
    return ( 
     <Card className="my-3 p-3 rounded">
       <a href={`/products/${Product._id}`}>
       <Card.Img src={Product.image} variant="top"/>
       </a>
       <Card.Body>
        <a href={`/products/${Product._id}`}>
        <Card.Title as="div">
            <strong>{Product.name}</strong>
        </Card.Title>
        </a>
        <Card.Text as="h3">
            ${Product.price}
        </Card.Text>
       </Card.Body>
     </Card>
     );
}

export default Products;