import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MusicApp from './music';
import ReactClicker from './reactClicker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/clicker" element={<ReactClicker />} />
          <Route path="/music" element={<MusicApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
