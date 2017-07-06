import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DropdownButton, MenuItem, ButtonToolbar }from 'react-bootstrap';
import Griddata from './grid/Mygrid';
import NewGridData from './grid/Secondgrid';
import Accordionfs from './Accordion/Accordion';


class App extends React.Component {
constructor(props){
  super();
  this.setTitle = this.setTitle.bind(this);
  this.state = {
     getTitle:'Please select'
  };

}
setTitle(event,value){
// event.preventDefault();

 this.setState({
   getTitle: value.target.innerText
 })
}
//  renderDropdownButton(title, i) {
  
//   return (
//     <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
//       <MenuItem eventKey="1">Action</MenuItem>
//       <MenuItem eventKey="2">Another action</MenuItem>
//       <MenuItem eventKey="3" active>Active Item</MenuItem>
//       <MenuItem divider />
//       <MenuItem eventKey="4">Separated link</MenuItem>
//     </DropdownButton>
//   );
// }

  render() {
    return (
      <div>
      <div  className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
        <Accordionfs/>
          <NewGridData/>
          <DropdownButton title={this.state.getTitle} key={"basic"} id={`dropdown-basic-basic`}>
                <MenuItem eventKey="1" className = {this.state.getTitle === 'Action' ? 'ActiveCls' : 'false' } onSelect={this.setTitle} value="Action">Action</MenuItem>
                <MenuItem eventKey="2" className = {this.state.getTitle === 'Another action' ? 'ActiveCls' : 'false' } onSelect={this.setTitle} value="Another action">Another action</MenuItem>
                <MenuItem eventKey="3" className = {this.state.getTitle === 'Active Item' ? 'ActiveCls' : 'false' } onSelect={this.setTitle} value ="Active Item" >Active Item</MenuItem> 
        </DropdownButton>
      
      </div>
    );
  }
}

export default App;
