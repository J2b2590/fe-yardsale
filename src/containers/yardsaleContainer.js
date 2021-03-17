import React from "react";
import { connect } from "react-redux";

function YardSaleContainer(props) {
  console.log(props.yards.streetAddress, "YARDSALE");
  return (
    <div>
      <h1>{props.yards.streetAddress}</h1>
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    yards: state.yards,
  };
};

export default connect(mapStateProps)(YardSaleContainer);
