import { useParams } from 'react-router-dom';

function ProductScreen() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductScreen;
