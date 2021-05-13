import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MenuBar() {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size="large" color="blue">
      <Menu.Item
        name="universe"
        active={activeItem === "universe"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="stars"
          active={activeItem === "stars"}
          onClick={handleItemClick}
          as={Link}
          to="/stars"
        />
        <Menu.Item
          name="imprint"
          active={activeItem === "imprint"}
          onClick={handleItemClick}
          as={Link}
          to="/imprint"
        />
      </Menu.Menu>
    </Menu>
  );
}

export default MenuBar;
