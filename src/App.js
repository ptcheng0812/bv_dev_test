import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';

const App = () => (
  <div className={style.main}>
    <Hero />
    <Home />
  </div>
);

export default App;
