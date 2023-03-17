import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { User } from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <Header />
      <User/>
      <Footer />
    </div>
  );
}

export default App;
