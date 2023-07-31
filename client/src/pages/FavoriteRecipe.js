import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

import Recipe from "./Recipe";
export default function FavoriteRecipe() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/favorite")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="py-4">
          <h1>
            Favorite Recipes <FavoriteTwoToneIcon fontSize="large" style={{color:"green"}} />
          </h1>
        </Col>
      </Row>

      <Row>
        {recipes && recipes.map((recipe) => <Recipe recipe={recipe} isFavorite={true}/>)}
      </Row>
    
    </Container>
  );
}
