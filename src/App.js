import React,{Component} from 'react';
import Firstpage from './components/firstpage';
import Header from './components/header'

 class App extends Component {
  render(){
      return (
      <div className="App">
         <Header />
        <Firstpage /> 
      </div>
      );
  }
}

export default App;