import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Grid,
  Transition,
  Label,
  Button,
  Icon,
} from "semantic-ui-react";

const Universe = () => {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/universes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUniverse(data);
      });
  }, []);

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="center"
          size="small"
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSRNF98hjeJ9wfBOZ-iIcnIwdD8ugFNhqTk9E6At7rc9LW_iJKC9D2G40VnZTlJSUlbfwiki0fyTGu6HG-1gaRtfUZ0z.jpg?r=593"
        />
        <Card.Header></Card.Header>
        <Card.Meta as={Link} to={"/"}></Card.Meta>
        <Card.Description>
          {universe &&
            universe.map((universes) => {
              return (
                <div>
                  <h1 key={universes.id}> {universes.name} </h1>
                  <p>Maximum Size: {universes.maxSize}</p>
                  <p>Current Size: {universes.currentSize}</p>
                </div>
              );
            })}
        </Card.Description>
      </Card.Content>
      <Card.Content extra></Card.Content>
    </Card>
  );
};

export default Universe;
