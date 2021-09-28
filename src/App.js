import './App.css';
import React, { Component } from 'react';
import { AppContextProvider, AppContext} from './appContext';

class Lista extends Component {
render() {
   const {title, users} = this.context;
    var a = this.context;
    console.log(a)
    return (
           <React.Fragment>
              <h1>{title}</h1>
              <ul>
                {users.map(user => 
                <li>{user}</li>
                )}
              </ul>
            </React.Fragment>
    );
  }

}
Lista.contextType = AppContext;

class App extends Component {
  render() {
    return (
      <AppContextProvider >
        
        <Lista/>

      </AppContextProvider>
    );
  }
}

export default App;
