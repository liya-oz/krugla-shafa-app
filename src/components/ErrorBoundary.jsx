import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Update state when an error is caught
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Log error details for debugging or external reporting
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Optionally, send error details to an error reporting service.
  }

  render() {
    if (this.state.hasError) {
      // If a custom fallback UI is provided via props, render it;
      // otherwise, render a default message.
      return this.props.fallback || (
        <h2>Something went wrong. Please try again later.</h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;