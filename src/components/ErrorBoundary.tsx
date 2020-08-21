import React, { Component, ErrorInfo } from 'react';

interface IErrorBoundary {

}

interface IErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<IErrorBoundary, IErrorBoundaryState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;