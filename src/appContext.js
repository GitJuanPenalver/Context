import React, { Component } from 'react';


// Create a context

export const AppContext = React.createContext({
  users: [],
  title: 'default'
});

export class AppContextProvider extends Component {
    render() {
      return (
        <AppContext.Provider value={{
          users: ['Leo', 'Juan'],
          title: 'Am'
        }}>
          {this.props.children}
        </AppContext.Provider>
      );
    }
  }

export const AppContextConsumer = AppContext.Consumer;