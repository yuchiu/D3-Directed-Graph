import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/styles.scss'
import ForceGraph from './components/ForceGraph';
import Header from './components/Header'

const app = (
  <div className='App'>
    <Header/>
    <ForceGraph/>
  </div>
)

ReactDOM.render(app, document.getElementById('root'))

