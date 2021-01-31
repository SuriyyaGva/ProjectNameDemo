import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }

    toggleAuth = () => {
        this.setState({
            isAuthenticated: !this.state.isAuthenticated
        });
    };

    render() { 
        return (
            <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                { this.props.children }
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;