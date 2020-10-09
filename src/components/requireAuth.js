import React, { Component } from "react";
import { connect } from "react-redux";

//HOC - Higher Order Component
//It wraps the children element
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    //Component just rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    //Component just updated props
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    //We need to manually pass the props down, the child component don't get them automatically
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
