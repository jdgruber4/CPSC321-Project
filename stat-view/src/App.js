
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App(){
 
  return (
    <div>
    <header class="header-banner">
  <div class="container-width" id="iu9f">
    <div class="clearfix">
    </div>
    <div class="lead-title" id="ivrvk">Stat View
      <br/>
    </div>
  </div>
</header>
<section class="flex-sect" id="iwbf2">
  <div class="container-width">
    <div class="flex-title" id="if3qt">Select which category of stats you would like to see:
      <br/>
    </div>
    <div class="cards">
      <Router>
      <Link to="/stat.js" class="card"> 
      
        <div class="card-header">
        </div>
        <div class="card-body" id="i3sdc">
          
          <div class="card-title" id="ij7cl">Players
          </div>
        </div>
      </Link></Router>
      <button class="card">
        <div class="card-header ch2">
        </div>
        <div class="card-body">
          <div class="card-title" id="ipvfl">Teams
          </div>

        </div>
      </button>
      <button class="card">
        <div class="card-header ch3">
        </div>
        <div class="card-body" id="itbpi">
          <div class="card-title" id="in04e">Coaches
          </div> 
        </div>
      </button>
    </div>
  </div>
</section>
</div>
  );
}

export default App;
