import './App.css';
import React, { Component } from 'react';
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users : [
        {
          name: "Calvin",
         gen: "14", 
         email: "calvin@email.com"
        },

        {
          name: "Doreen",
         gen: "15", 
         email: "doreen@email.com"
        },

        {
          name: "Irene",
         gen: "2",
          email: "irene@email.com"
        }
      ]
    }};
    
  

    addNewUser = (newUser) => {
      this.setState({
        users: [...this.state.users, newUser]  
      }
      );
    };
    
  

  render(){
    return (
      <div className = "App">
       {/*form information*/ }
       <UsersForm addUser = {this.addNewUser}/>
        
        <div className = "app-info">
          {this.state.users.map((item, index) => {
            return(
            
               <UserInfo
              key={index} 
              name={item.name}
              email={item.email}
              gen={item.gen}/>

               );
          
          })}
        </div>
        </div>
        
        
     
    );
  }
}

export default App;



