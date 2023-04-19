
import './App.css';
import CardRender from './component/CardRender'
import Nav from './component/Nav';
import Nav1 from './component/Nav1';

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      {/* <Nav></Nav> */}
      <Nav1/>
      {/* Card in main and render */}
      <CardRender/>
    </div>
  );
}
export default App;
