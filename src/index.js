import React from 'react';
import ReactDOM from 'react-dom';
import VegaLite from 'react-vega-lite';
import HJSon from 'hjson';

async function render(){
  const response = await fetch("/spec.hjson");
  const spec = HJSon.parse(await response.text());  

  ReactDOM.render(
    <VegaLite spec={spec} />,
    document.getElementById('root')
  );
}

render();
