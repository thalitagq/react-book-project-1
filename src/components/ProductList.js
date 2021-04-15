import React from 'react'
import Product from './Product'
import Seed from '../js/seed'
import '../../src/App.css'

class ProductList extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: [],
  //   };

  //   this.handleProductUpVote = this.handleProductUpVote.bind(this); 
  // }  
  
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({ products: Seed });
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        console.log('if')
        return Object.assign({}, product, {
        votes: product.votes + 1,
      });
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts,
    })  
  }
  
  render() {
    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));

    const productComponents = this.state.products.map((product) => (
      <Product
      key={'product-' + product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      onVote={this.handleProductUpVote}
      />
    ));

    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );
  }
}  
export default ProductList