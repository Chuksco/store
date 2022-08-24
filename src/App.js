import './App.css';
import Category from './components/category/category';
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Featured />
    </div>
  );
}

export default App;
