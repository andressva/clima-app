import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Form from './components/Form.js';
import CardWeather from './components/CardWeather.js';


const API_KEY = "ba6970bf2cdb1b781165a62fe63909dd";

//api.openweathermap.org/data/2.5/weather?q=London

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: null,
      icon: null,
      temp: null,
    }; 

  }

  toCelcius(temp){
    return Math.floor(temp-273.15);
  }

  getWeather = async (e) =>{
    e.preventDefault();
    let cityName = e.target.cityName.value;
    if(cityName){
      const CALL_API = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)

      let res = await CALL_API.json();
      
      if(res.cod != 200){
        alert("Enter a valid City!")
      }else{

        this.setState({
          city: res.name,
          icon: res.weather[0].icon,
          temp: this.toCelcius(res.main.temp)
        })

      }
      
    }else{
      alert("Enter a City!")
    }
    

  }

  render(){
    return (
    <div className="App">
      <Header />
      <Form handleSubmit={this.getWeather}/>
      <CardWeather city={this.state.city} temp={this.state.temp} icon={this.state.icon} />
    </div>
    )
  }

}


export default App;
