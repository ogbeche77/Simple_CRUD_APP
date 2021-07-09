import React, { useState, useEffect } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const Stars = () => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/stars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStars(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div data-testid="starsId">
      <h2>Stars</h2>

      <Card fluid>
        <Card.Content>
          <Image
            floated="left"
            size="small"
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7bbe5762c79ee0ad11c1267483b4a2d5e12868de779eaf751e8e86596e978bbb._V_SX1080_.jpg"
          />

          <Card.Header></Card.Header>
          <Card.Meta as={Link} to={"/"}></Card.Meta>
          <Card.Description>
            {stars &&
              stars.map((stars, index) => {
                return (
                  <div key={index}>
                    <h1 key={stars.id}>{stars.name} </h1>
                    <p></p>
                  </div>
                );
              })}
          </Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    </div>
  );
};

export default Stars;
