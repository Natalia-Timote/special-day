import './App.css';
import Propose from './pages/Propose';

function App() {
  return (
    <div 
      className="App" 
      style={{ 
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Propose question={"Você quer namorar comigo?"} />
    </div>
  );
}

export default App;
