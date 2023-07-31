import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import Rating from "@mui/material/Rating";
import RecipeServices from "../components/RecipeServices";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export default function Recipe(props) {
  const navigate = useNavigate();

  const handleDelete = () => {
    RecipeServices.deleteFavorite(props.recipe._id);
    setTimeout(() => navigate(0), 500);
  };
  return (
    <Col className="p-3">
      <Card border="dark" style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={props.recipe.image}
          style={{ width: "auto", height: "300px", overflow: "hidden" }}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{props.recipe.name}</Card.Title>
          <Row
            style={{
              position: "relative",
              left: "80px",
              paddingBottom: "10px",
            }}
          >
            <Rating name="read-only" value={5} readOnly />
          </Row>

          <Button
            variant="success"
            size="small"
            style={{ width: "7.5rem" }}
            href={`/recipe/${props.recipe._id}`}
          >
            Learn More
          </Button>
          <div style={{ paddingTop: "0.3rem" }}>
            {props.isFavorite && (
              <Button
                variant="danger"
                onClick={handleDelete}
                size="small"
                style={{ width: "7.5rem" }}
              >
                Remove <HighlightOffIcon />
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
