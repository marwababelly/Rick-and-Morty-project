import './index.css'
import Header from './components/header/Header';
import Main from './components/body/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import  './App.css'

function App() {
  return (
    <Fragment >
      <Header />
      <Main />
      </Fragment>
  );
}

export default App;
