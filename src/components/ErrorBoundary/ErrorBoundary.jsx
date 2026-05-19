import { Component } from "react";
import { AlertTriangle } from "lucide-react";
import { ErrorButton, ErrorCard, ErrorContainer, ErrorIcon, ErrorMessage, ErrorTitle } from "./styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorCard>
            <ErrorIcon>
              <AlertTriangle size={48} />
            </ErrorIcon>
            <ErrorTitle>Something went wrong</ErrorTitle>
            <ErrorMessage>{this.state.error?.message || "An unexpected error occurred"}</ErrorMessage>
            <ErrorButton onClick={this.handleRetry}>Try Again</ErrorButton>
          </ErrorCard>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
