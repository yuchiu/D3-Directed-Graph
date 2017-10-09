import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/styles.scss'
import ForceGraph from './components/ForceGraph';

const app = (
  <div className='App'>
    <div className='App-header'>
      <h2>React D3</h2>
    </div>
    <ForceGraph/>
  </div>
)

ReactDOM.render(app, document.getElementById('root'))

