import React from "react";

const Imprint = (props) => {
  const { sampleTest } = props;
  return (
    <>
      {" "}
      <div>&copy; {new Date().getFullYear()} Copyright</div>
      <div data-testid="sample-item">{sampleTest}</div>
    </>
  );
};

export default Imprint;
