import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function HomePageDisplay() {
  return (
    <Carousel fade style={{ paddingTop: "0.5rem" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
        />
        <Carousel.Caption className="font-link">
          <h3>Explore authentic recipes </h3>
          <p>
            Create and sharing new cooking experience at your place with our
            home-chef community.
          </p>
          <Link to="/recipe">
            <Button variant="success">Learn More</Button>
            {""}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="Second slide"
          src="https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        />

        <Carousel.Caption className="font-link">
          <h3>Inspired nouvelle cuisine</h3>
          <p>
            {" "}
            Learn to use premium fresh ingredients and presented artistically on
            the plate.
          </p>{" "}
          <Link to="/recipe">
            <Button variant="success">Learn More</Button>
            {""}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1461009312844-e80697a81cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="Third slide"
        />

        <Carousel.Caption className="font-link">
          <h3>Enjoy the art of cooking</h3>
          <p>
            Join our community and cooking at ease with our newly shopping list
            feature.
          </p>
          <Link to="/signUp">
            <Button variant="success">Sign Up</Button>
            {""}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageDisplay;
