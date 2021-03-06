
import './App.css';
import React from 'react';
import stat from './stat'
import './stat.css'


class App extends React.Component {

constructor() {
  super();
  this.state = {
    stat: 0
  };
}

activate = () => {
  this.setState({stat: 1 });
}

render() {
  if(this.state.stat == 0){
    return (
      
      <div>
        <button class="card1" onClick={this.activate}> </button>
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
        <button class="card1" onClick={this.activate}>

          <div class="card-header">
          </div>
          <div class="card-body" id="i3sdc">
            
            <div class="card-title" id="ij7cl">Players
            </div>
          </div>
        </button>
        <button class="card2" onClick={this.activate}>
          <div class="card-header ch2">
          </div>
          <div class="card-body">
            <div class="card-title" id="ipvfl">Teams
            </div>

          </div>
        </button>
        <button class="card3" onClick={this.activate}>
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
else{
  return (

    <div>
    <div class="row">
    </div>
    <div class="row" id="i0ya4">
      <div class="cell" id="iz6gh">
        <div id="if0si">add variable declaration to match catagory 
        </div>
      </div>
      <div class="cell" id="imc18">
        <div class="row" id="irijq">
          <div class="cell" id="ikw8a">
            <form class="form">
              <div id="ixiqk">Select players
                <br/>
              </div>
              <select class="select" id="iwwaw"><option value="">- Select option -</option><option value="1">Option 1</option></select>
              <div class="form-group">
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
              </div>
            </form>
          </div>
          <div class="cell">
            <form class="form">
              <div id="ioxgj">Select stat
                <br/>
              </div>
              <select class="select"><option value="">- Select option -</option><option value="1">Option 1</option></select>
              <div class="form-group">
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
              </div>
            </form>
          </div>
          <div class="cell">
            <form class="form" id="i3zxj">
              <div id="ic50l">Select Season
                <br/>
              </div>
              <select name="Select a Season" class="select" id="im2kl"><option value="">- Select option -</option><option value="">2018</option><option value="">2019</option><option value="">2020</option><option value="">All</option></select>
              <div class="form-group">
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="ix6bg">
      <div class="cell" id="idwfg">
        <div id="ib7sw">Player table
          <br/>
      </div>
      <div class="cell" id="irlov">
        <div id="iluk1">Stat table
          <br/>
          
        </div>
        <table class="test-table">
          <thead>
            <tr>
              <th class="tg-0lax">Team Name</th>
              <th class="tg-0lax">Wins</th>
              <th class="tg-0lax">Losses</th>
              <th class="tg-0lax">Draws</th>
              <th class="tg-0lax">Superbowl Wins</th>
              <th class="tg-0lax">Season</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax"></td>
              <td class="tg-hmp3"></td>
              <td class="tg-0lax"></td>
              <td class="tg-hmp3"></td>
              <td class="tg-0lax"></td>
              <td class="tg-hmp3"></td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    
    )
}
}


}
export default App;
