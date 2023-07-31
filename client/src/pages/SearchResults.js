import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Recipe from "./Recipe";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function fetchData() {
    fetch(`http://localhost:8000/search?searchTerm=${searchTerm}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
        console.log(data);
      });
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `http://localhost:3000/search?searchTerm=${searchTerm}`;
    navigate(path);
  };

  return (
    <>
      <Form
        className="d-flex"
        style={{
          width: "20rem",
          marginLeft: "60rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <Button
          variant="outline-success"
          style={{ marginRight: "0.5rem" }}
          onClick={() => {
            routeChange();
            fetchData();
          }}
        >
          Search
        </Button>
      </Form>

      <Container>
        <Row>
          {searchResults &&
            searchResults.map((recipe) => (
              <Recipe key={recipe.name} recipe={recipe} />
            ))}
        </Row>
      </Container>
    </>
  );
}
