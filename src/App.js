import React from 'react';
import logo from './logo.JPG';
import "./App.css";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img serc={logo} className="App-logo"/>
//       <p>Learn React!</p>
//       </header>
//     </div>
//     // <h1></h1>
//   );
// }

//  export default App;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

    addItem(todoValue){
      if (todoValue !== "") {
        const newItem = {
          id: Date.now(),
          value: todoValue,
          isDone: false
        };
        const list = [...this.state.list];     // All the values in todoValue are appended in list
        list.push(newItem);

        this.setState({
          list,
          newItem: ""
        });
      }
    }


    deleteItem(id){
      const list = [...this.state.list];    // we have a copy of list items
      const updatedlist = list.filter(item => item.id !== id);
      this.setState({list: updatedlist});
    }

    updateInput(input){
      this.setState({newItem: input});
    }


render(){
    return(
      <div>
        <img src={logo} alt="" width="100" height="100" className="logo" />
          <h1 className="app-title">SHIVARAJ-Todo App</h1>
        <div className="container">
            Add an Item....
            <br/>
        <input
          type="text"
          className="input-text"
          placeholder="Write a Todo"
          required 
          value={this.state.newItem}           // updating the new item to the list!
          onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}   // adds the new item
            disabled={!this.state.newItem.length}
            >
            Add Todo
          </button>
          
          <div className="list">
            <ul>
                 {this.state.list.map(item => {       // loop through the item list using "map"
                   return(
                        <li key={item.id}>
                          <input
                            type="checkbox"
                            name="isDone"
                            checked = {item.isDone}
                            onChange = { ()=> {                 // callback when any change is occurred!
                                                              // implement it later ON!!    
                            }
                          }
                          />
                          
                          {item.value}
                          
                          <button
                            className="btn"
                            onClick={ () => this.deleteItem(item.id) }     // deleting the item using ID
                          >
                            Delete
                          </button>
                        </li>
                   );
                 })}
                 <li>
                   <input type="checkbox" name="" id=""/>
                   Add your Daily tasks here
                   <button className="btn">Delete</button>
                 </li>
               </ul>
             </div>
         </div>
        </div>
   );
   
 }

}

export default App;