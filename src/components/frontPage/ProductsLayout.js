import {
  Container,
  Col,
  Row,
  Button,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import {useState} from "react";
function ProductsLayout(props) {
  let {category} = useParams("category");
  let [filterBy,setFilterBy] = useState(false);
  let productsList = [
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
  let [products] = useState(productsList)
  products = productsList
 
  if(category !== undefined){
    
    let filterByGender =  productsList.map(el => el).filter(el=> el.categories.includes(category))
    if(filterBy !== false){
      let filterBySubCategory =  filterByGender.map(el => el).filter(el=> el.categories.includes(filterBy)?el:false)
      //console.log(data)
      products = filterBySubCategory
    }else{
      products = filterByGender
    }
 
  }else{
    
  }
  function setMyFilterBy(params) {
    //filterBy = params
    setFilterBy(params)
    
  }
  
 

  return (
    <Container className="ProductsLayout mt-5 ">
      <ButtonGroup aria-label="Categories ">
      <Link to="/">
      
        </Link>
        <Link to="/sfenj">
          <Button
            className={
              category === "sfenj"
                ? "ml-2 font-weight-bold text-uppercase"
                : "ml-2  text-uppercase"
            }
            variant="light"
          >
            Sfenj
          </Button>
        </Link>
        <Link to="/soon">
          <Button
            className={
              category === "coming-soon"
                ? "ml-2 font-weight-bold text-uppercase"
                : "ml-2  text-uppercase"
            }
            variant="light"
          >
            Coming Soon
          </Button>
        </Link>

      </ButtonGroup>
      <br />
      <Container className="mt-3">
       {loadSubCategory(category,setMyFilterBy)}
      </Container>

      <Row className="ProductsList min-vh-100">
        {
            checkIfThereIsProducts(products)
       }
      </Row>
    </Container>
  );
}
function loadSubCategory(param,setFilterBy) {
  if(param){
    return (<div>
    <Button onClick={()=>setFilterBy("Sfenj")}  variant="white" className="ml-1 border ">
    SFENJ
    </Button>
    <Button onClick={()=>setFilterBy("tops")}  variant="white" className="ml-1 border">
    TOPS
    </Button>
    <Button onClick={()=>setFilterBy("new arrivals")}  variant="white" className="ml-1 border">
    AKHIR MA KHREJ F SOU9
    </Button>
  
    </div>)
        
  }
}

export default ProductsLayout;
function checkIfThereIsProducts(products) {
  if(products !== []){
          
   return products.map((element, index) => {
        
      return (
        <Col md={3} key={element.id} className="text-center mt-4">
          <Card style={{ width: "100%" }} border="light">
            <Link to={"/item/" + element.slug}>
              <Card.Img
                variant="top"
                src={element.imageUrl}
                style={{ minHeight: "200px" }}
              />
            </Link>
            <Card.Body style={{ Height: "100px" }}>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>${element.price}</Card.Text>
            </Card.Body >
            <Link
              
                style={{ textDecoration: "none", color: "black"}}
                to={"/item/" + element.slug}
              >
            <Button
              variant="light"
              style={{ border: "1px solid black", color: "#fffff",width:"100%" }}
            >
              
                More Info
            
            </Button>
            </Link>
          </Card>
        </Col>
      );
    
   
  })
  }

}
