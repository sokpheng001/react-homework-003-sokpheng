import logo from './logo.svg';
import './App.css';
import Skelton from './component/Skelton';
import CardRender from './component/CardRender'
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <Nav/>
      <hr></hr>
      {/* Card in main and render */}
      <CardRender/>
    </div>
  );
}

export default App;
