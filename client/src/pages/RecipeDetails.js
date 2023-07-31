import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { SocialIcon } from "react-social-icons";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from "react-bootstrap/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RecipeServices from "../components/RecipeServices";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function RecipeDetails() {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  const handleDelete = () => {
    RecipeServices.delete(recipeId);
    alert("Recipe has been deleted");
    setTimeout(() => navigate("/recipe"), 500);
  };

  function handleFavorite() {
    RecipeServices.addToFavorite(recipe._id);
    alert("Recipe has been add to favorite list!");
  }

  function handleShoppingList() {
    RecipeServices.addToShoppingList(recipe._id);
    alert("Recipe has been add to shopping list!");
  }

  useEffect(() => {
    fetch(`http://localhost:8000/recipe/${recipeId}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <>
      {recipe && (
        <>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
            integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
            crossOrigin="anonymous"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="project-info-box">
                  <h3>
                    <Badge pill bg="dark">
                      {recipe.name}{" "}
                    </Badge>
                  </h3>
                  <Rating name="read-only" value={5} readOnly />

                  <p>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={handleFavorite}
                    >
                      Add to Favorite <FavoriteIcon />
                    </Button>
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={handleShoppingList}
                    >
                      Add to <ShoppingCartIcon />
                    </Button>
                  </p>
                  <p>
                    <b>Categories:</b> {recipe.category}
                  </p>
                  <p>
                    <b>Ingredients: </b>
                    {recipe.ingredients}
                  </p>

                  <p>
                    <b>Method:</b>
                    <b></b>
                  </p>
                  <p>{recipe.method}</p>

                  <p></p>
                </div>

                <div className="project-info-box mt-0 mb-0">
                  <div className="mb-0">
                    <span className="fw-bold mr-10 va-middle hide-mobile">
                      Share
                    </span>

                    <ButtonGroup aria-label="Basic example">
                      <Button variant="outline-light">
                        <SocialIcon
                          network="facebook"
                          url="https://twitter.com"
                          style={{
                            height: 25,
                            width: 25,
                          }}
                        />
                      </Button>
                      <Button variant="outline-light">
                        <SocialIcon
                          network="twitter"
                          url="https://facebook.com"
                          style={{ height: 25, width: 25 }}
                        />
                      </Button>
                      <Button variant="outline-light">
                        <SocialIcon
                          network="instagram"
                          url="https://instagram.com"
                          style={{ height: 25, width: 25 }}
                        />
                      </Button>
                      <Button variant="outline-light">
                        <SocialIcon
                          network="tiktok"
                          url="https://tiktok.com"
                          style={{ height: 25, width: 25 }}
                        />
                      </Button>
                      <Button variant="outline-light">
                        <SocialIcon
                          network="discord"
                          url="https://discord.com"
                          style={{ height: 25, width: 25 }}
                        />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <img
                  src={recipe.image}
                  alt="project-image"
                  className="rounded"
                />
                <div className="project-info-box">
                  <p>
                    {" "}
                    <Button
                      variant="outline-warning"
                      size="sm"
                      onClick={handleDelete}
                    >
                      Delete this recipe
                    </Button>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
