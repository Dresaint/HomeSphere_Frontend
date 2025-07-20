
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostProperty from './pages/PostProperty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/post' element={<PostProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
