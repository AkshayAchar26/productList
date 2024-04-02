import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import currencyConvertter from "../util/currencyFormatter";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function ProductCard({
  productImage,
  productTitle,
  productPrice,
  productCategory,
  productDescription,
  addToCart,
}) {
  const dispatch = useDispatch();
  const cardRef = useRef();

  const cartHandler = () => {
    console.log(cardRef.current);
  };

  return (
    <Card className="w-96 flex mt-2 ">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={productImage}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {productTitle}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {currencyConvertter.format(productPrice)}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {productDescription}.
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {productCategory}.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={addToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
