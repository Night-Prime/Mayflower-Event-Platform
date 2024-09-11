import React, { Component } from "react";
import ErrorPage from "../components/ErrorPage";

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
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
