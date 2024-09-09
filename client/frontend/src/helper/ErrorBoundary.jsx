import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.log("Error: ", this.state.hasError);
      return <h1>Something went wrong loading the component.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
