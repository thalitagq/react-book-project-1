import './App.css';
import ProductList from '../src/components/ProductList'

function App() {
  return (
    <div className="main ui text container" style={{padding: '2rem 0'}}>
      <h1 className='ui dividing centered header'>Popular Products</h1>
      <ProductList/>
    </div>
  );
}

export default App;
