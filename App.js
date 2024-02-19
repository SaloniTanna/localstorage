import React from 'react';
class App extends React.Component{
  constructor(props)
  {
      super(props);
      this.state = { }
  };
  //Set Data
  setData(){
    localStorage.setItem("mycolor","red");
    alert("Data is set");
  }
  //Get Data
  getData()
  {
    let mydata = localStorage.getItem("mycolor");
    if(mydata)
    {
      alert("Data is :"+mydata);
    }
    else
    {
      alert("Data is not set");
    }
  }
  //Remove Data
  removeData()
  {
    localStorage.removeItem('mycolor');
    
  }
  render()
  {
      return(
        <div>
          <h2>LocalStorage</h2>
          <button onClick={this.setData.bind(this)}>Set Data</button>
          <button onClick={this.getData.bind(this)}>Get Data</button>
          <button onClick={this.removeData.bind(this)}>Remove Data</button>        
        
        </div>
      )
  }
    
  
}

export default App;
