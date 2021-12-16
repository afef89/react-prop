
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Profile from './Profile/Profile';
import Handlename from './Profile/Handlename';


class App extends Component{
  render() {
    const Handlename = () => {
      alert(`${this.props.FullName}`);
    };
 
  return (
    
    <div className="App">
      <Profile Fullname="afef mabrouk"> 
      <img src='https://image.shutterstock.com/image-vector/developer-logo-template-260nw-525037318.jpg'></img> </Profile>
      
      <Profile Bio= "I'am a developer"/>
      
      <Profile profession="developer"/>
      <button onClick={Handlename}>User</button>
      
    </div>
  );
}
}
export default App;
