import React from 'react'
import '../../src/App.css'

class Product extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.handleUpVote = this.handleUpVote.bind(this);
  // }

  handleUpVote = () => (
    this.props.onVote(this.props.id)
  );

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render(){
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    )
  }  
}

export default Product
