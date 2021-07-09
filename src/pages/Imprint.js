import React from "react";

const Imprint = (props) => {
  return (
    <>
      {" "}
      <div>&copy; {new Date().getFullYear()} Copyright</div>
      <div data-testid="sample-item">{props.sampleTest}</div>
    </>
  );
};

export default Imprint;
