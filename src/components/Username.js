import React from "react";
import { connect } from "react-redux";

function Username(props) {
  console.log(props, "USERNAME");
  const currentUsername = props.user.name;
  return (
    <div>
      <h2>{currentUsername}</h2>
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateProps)(Username);
