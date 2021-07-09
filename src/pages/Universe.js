import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Card, Image, Button, Label } from "semantic-ui-react";
import {
  cyInputUniverseName,
  cyInputMaximumSize,
  cyInputCurrentSize,
  cyAddNewUniverseButton,
} from "../handles/index.js";

const Universe = () => {
  const { id } = useParams;
  const [universe, setUniverse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newUniverse, setNewUniverse] = useState("");
  const [maximumSize, setMaximumSize] = useState("");
  const [currentSize, setCurrentSize] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8080/universes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUniverse(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleSumit = (e) => {
    e.preventDefault();
    const createNewUniverse = { newUniverse, maximumSize, currentSize };

    fetch("http://localhost:8080/universes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createNewUniverse),
    }).then(() => {
      history.go(0);
    });
  };

  const handleDelete = () => {
    fetch("http://localhost:8080/universes/" + id, {
      method: "DELETE",
    }).then(() => {
      history.go(0);
    });
  };

  return (
    <div data-testid="universe">
      <Card fluid>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />

          <Card.Description>
            {loading && <h1>Loading</h1>}
            {universe &&
              universe.map((universes, index) => {
                return (
                  <div key={index}>
                    <h1> {universes.newUniverse} </h1>
                    <div className="universe-body">
                      <Label basic color="grey" pointing="left">
                        Maximum Size: {universes.maximumSize}
                      </Label>

                      <Label basic color="grey" pointing="left">
                        Current Size: {universes.currentSize}
                      </Label>
                      <Button
                        onClick={handleDelete}
                        type="submit"
                        color="brown"
                      >
                        {" "}
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <form className="form-container" onSubmit={handleSumit}>
            <h3 className="form-title">Add a universe</h3>
            <div className="form-content">
              <input
                placeholder="Add a universe"
                type="text"
                required={true}
                value={newUniverse}
                onChange={(e) => setNewUniverse(e.target.value)}
                data-cy={cyInputUniverseName}
              />
              <input
                placeholder="Add Maximum Size"
                type="number"
                required={true}
                value={maximumSize}
                onChange={(e) => setMaximumSize(e.target.value)}
                data-cy={cyInputMaximumSize}
              />
              <input
                placeholder="Add Current Size"
                type="number"
                required={true}
                value={currentSize}
                onChange={(e) => setCurrentSize(e.target.value)}
                data-cy={cyInputCurrentSize}
              />
            </div>
            <Button
              type="submit"
              color="brown"
              data-cy={cyAddNewUniverseButton}
            >
              {" "}
              Submit
            </Button>
          </form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Universe;
