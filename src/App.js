import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
    constructor(){
      super();
      this.state={
        products: []
      }
    }

    componentDidMount() {
      axios.get('/api/products')
      .then(res => {
        console.log(res.data)
        this.setState({
          products: res.data
        })
      }).catch(err => console.log(`axios get error: ${err}`))
    }

  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form 
        products={this.state.products}
    
        />
        <Header />
      </div>
    );
  }
}

export default App;
