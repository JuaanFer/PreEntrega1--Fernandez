import './App.css';
import CardWidget from './components/CardWidget';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
          <CardWidget/>
        </NavBar>
      </header>
    </div>
  );
}

export default App;
