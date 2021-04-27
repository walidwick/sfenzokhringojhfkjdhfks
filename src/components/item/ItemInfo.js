import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { AddToBasket } from "../../App";
import InnerImageZoom from "react-inner-image-zoom";
function ItemInfo() {
  const cookies = new Cookies();
  let { myProductCount } = useContext(AddToBasket);
  let [quantity, setQuantity] = useState(1);
  let [color, setColor] = useState("#");
  let [size, setSize] = useState("#");
  if (cookies.get("myBag") === undefined) {
    cookies.set("myBag", [], { path: "/" });
  }
  let { slug } = useParams();
  function AddToBasketClicked(e) {
    let product = productInfo.find((item) => item.slug === slug);

    if (product !== []) {
      product.quantity = quantity;
      product.color = color;
      product.size = size;
      saveToStorage(product, cookies);
      myProductCount();
    }
  }
  function setMyQuantity(e) {
    console.log(e.target.value);
    setQuantity(e.target.value);
  }
  function setMyColor(e) {
    console.log(e.target.value);
    setColor(e.target.value);
  }
  function setMySize(e) {
    console.log(e.target.value);
    setSize(e.target.value);
  }

  let productInfo = [
    {
      slug: "product1",
      id: 0,
      title: "sfenja dial lfo9ara",
     
      categories:["Sfenj","tops","sfenj","new arrivals"],
      price: 0.5,
      imageUrl:
        "https://mysite.ma/wp-content/uploads/2014/04/002.png",
    },
    {
      id: 1,
      slug: "product2",
      title: "sfenja dial l2aghniya2",
      price: 5.10,
      
      categories:["Sfenj","tops","sfenj","new arrivals"],
      imageUrl:
        "https://wasfh.net/wp-content/uploads/2020/01/d988d8b5d981d8a9-d8b9d985d984-d8a7d984d8b3d981d986d8ac-d8a7d984d985d8bad8b1d8a8d98a-d988d8b5d981d8a9-d8b3d987d984d8a9-d988d8b3d8b1d98a_5e2128b8a83f5.jpeg",
    },
  ];
  //console.log(id);
  return (
    <Container className="mt-5">
      <Link to="/">
        <Button className="w-15 border mb-2" variant="light">
          <span className="text-dark">
            <b>{"<"}</b>
          </span>{" "}
          Back
        </Button>
      </Link>
      {productInfo.map((product, index) => {
        if (slug === product.slug) {
          return (
            <Row key={product.id}>
              <Col md={6}>
                <div className="product-image w-100">
                  <InnerImageZoom
                    src={product.imageUrl}
                    zoomSrc={product.imageUrl}
                  />
                </div>
              </Col>
              <Col md={6}>
                <Form>
                  <h3>{product.title}</h3>
                  <h5>${product.price}</h5>
                  <Form.Group className="mt-5" controlId="formBasicInfo">
                    <Form.Label>Ch7al mn Kilo</Form.Label>
                    <br />
                    <Form.Control
                      className="w-25 "
                      as="select"
                      size="md"
                      custom
                      onChange={setMyQuantity}
                    >
                      <option>1 </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicActions">
                    <Button
                      className="w-100"
                      variant="primary"
                      onClick={AddToBasketClicked}
                      p-index={index}
                    >
                      ADD TO CART
                    </Button>
                  </Form.Group>
                  <Form.Group controlId="formBasicActions2">
                    <Button
                      className="w-100"
                      variant="primary"
                      type="submit"
                      onClick={(e) => e.preventDefault()}
                    >
                      Buy it now
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          );
        }
      })}
    </Container>
  );
}
function saveToStorage(product, cookies) {
  let correntBag = cookies.get("myBag");
  correntBag.push(product);
  cookies.set("myBag", correntBag, { path: "/" });
  cookies.set("productCount", correntBag.length, { path: "/" });
}

export default ItemInfo;
