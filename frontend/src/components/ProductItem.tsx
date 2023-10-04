import { Button, Card, CardBody } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductItem({ product }: { product: Product }) {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>

      <CardBody>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>

        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
         
        {product.countInStock === 0 ? <Button variant="light" disabled>Out of Stock</Button>: <Button>Add to Cart</Button>}

      </CardBody>
    </Card>
  );
}

export default ProductItem;
