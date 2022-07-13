import './App.css';
import Header from './components/Header';
import MegaMenu from './components/MegaNavBar';
/* import MegaMenu from './components/MegaNavBar'; */
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div>
      <MegaMenu/>
      <Header/>
      <RegisterForm/>
    </div>
  );
}

export default App;
