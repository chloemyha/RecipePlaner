import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import RecipeServices from "../components/RecipeServices";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

export default function Shopping(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const navigate = useNavigate();

  //handle remove complete shopping ingredients
  const handleDeleteIngredient = () => {
    RecipeServices.completeShopping(props.recipe._id);
    alert('Recipe is removed from shopping list!')
    //reload the page
    setTimeout(() => navigate(0), 500);
  };
  return (
    <div style={{paddingLeft:"20rem"}}>
    <Col className="p-3">
      <Card border="dark" style={{ width: "35rem"}}>
        <Card.Body>
          <Card.Title className="text-truncate">{props.recipe.name}</Card.Title>
          <Row
            style={{
              position: "relative",
              left: "80px",
              paddingBottom: "10px",
            }}
          ></Row>
          <Card.Title className="text-truncate">
            Ingredients to Shop:
          </Card.Title>{" "}
          <Row>{props.recipe.ingredients}</Row>
          <div style={{ paddingTop: "0.3rem" }}>
            <Button
              variant="outline-success"
              size="small"
              style={{ width: "10rem" }}
            >
              Completed{" "}
              <Checkbox
                {...label}
                style={{ color: "white" }}
                onClick={handleDeleteIngredient}
              />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
}
