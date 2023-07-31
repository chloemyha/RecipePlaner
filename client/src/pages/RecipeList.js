import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import Recipe from "./Recipe";
import Search from "./SearchResults";
export default function RecipeList() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col className="py-4">
            <h1>
              All Recipes <SoupKitchenIcon fontSize="large" />
            </h1>
          </Col>
        </Row>

        <Row>
          {recipes &&
            recipes.map((recipe) => (
              <Recipe key={recipe._id} recipe={recipe} />
            ))}
        </Row>
      </Container>
    </>
  );
}
