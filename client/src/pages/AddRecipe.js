import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import RecipeServices from "../components/RecipeServices";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [method, setMethod] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (ev) => setName(ev.target.value);
  const handleIngredientChange = (ev) => setIngredients(ev.target.value);
  const handleMethodChange = (ev) => setMethod(ev.target.value);
  const handleImageChange = (ev) => setImage(ev.target.value);
  const handleCategoryChange = (ev) => setCategory(ev.target.value);

  const clearState = () => {
    setName("");
    setIngredients("");
    setMethod("");
    setImage("");
    setCategory("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: name,
      ingredients: ingredients,
      image: image,
      method: method,
      category: category,
    };
    RecipeServices.create(newRecipe).then(() => clearState());
    alert("Recipe Submitted");
    setTimeout(navigate('/recipe'),10000)
  };
  return (
    <div className="container">
      <div className="col-md-5 col-md-offset-1">
        <Form
          method="post"
          onSubmit={handleSubmit}
          role="form"
          id="floating-label"
          style={{ position: "relative", left: "350px", paddingBottom: "10px" }}
        >
          <h1>
            {" "}
            <Badge pill bg="dark">
              Add new recipe
            </Badge>
          </h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Recipe name"
              onChange={handleNameChange}
              value={name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Categories</Form.Label>
            <Form.Control
              type="text"
              placeholder="Food Category"
              onChange={handleCategoryChange}
              value={category}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://example.com"
              onChange={handleImageChange}
              value={image}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleIngredientChange}
              value={ingredients}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Method</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              onChange={handleMethodChange}
              value={method}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
