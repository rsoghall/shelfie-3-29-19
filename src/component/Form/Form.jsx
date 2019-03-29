import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product';


export class Form extends Component {
    constructor(){
      super()
      this.state = {
        prod_id: null,
        image_url: '',
        prod_name: '',
        price: 0
      }
    }

    handleChange = (e) => {
      let {name, value} = e.target
      this.setState({
        [name]: value
      })
    }

    handleClick =() => {
      this.setState({
        image_url: '',
        prod_name: '',
        price: 0
      })

    }

    submit = (e) => {
      e.preventDefault();
      axios.post('/api/products')
        .then(res => {
          this.setState({
            img_url: '',
            prod_name: '',
            price: 0
          })
          this.props.history.push('/');
        })
        .catch(err => console.log('create product error'));
    }
    
    // submit = (e) => {
    //   e.preventDefault();
    //   let product=this.state;
    //   this.props.handleCreateProduct(product)
      
    //     .then(res => {
    //       this.setState({
    //         image_url: '',
    //         prod_name: '',
    //         price: 0
    //       })
    //     })
    //     .catch(err => console.log('submit error'));
    // }


  render() {
    let {products} = this.props
    let { image_url, prod_name, price} = this.state
    return (
      <div>
        Form
        <form onSubmit={this.handleSubmit}>
          <p>Image URL:</p>
          <input onChange={this.handleChange} value={image_url} type='text' name='image_url'/>
          <p>Product Name:</p>
          <input onChange={this.handleChange} value={prod_name} type='text' name='prod_name'/>
          <p>Price:</p>
          <input onChange={this.handleChange} value={price} type='number' name='price'/>
          <div>
            <button onClick={this.handleClick}>Cancel</button>
            <button type='submit'>Add to Inventory </button>
          </div>
        {products.map(product => {
          return <Product 
          key={product.product_id}
          id={product.product_id}
          img={product.image_url}
          prod={product.prod_name}
          price={product.price}
          />
        } )}
        
        
        </form>
      </div>
    )
  }
}

export default Form
