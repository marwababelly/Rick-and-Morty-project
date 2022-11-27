import style from './App.css';
import './index.css'
import Header from './components/header/Header';
import Main from './components/body/Main';
import {Button, Card, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment >
      <Header />
      <Main />
      <Card />
      </Fragment>
  );
}

export default App;
