import React, {useState,useContext} from 'react';
import '../componentStyle/Home.css'
import axios from 'axios';
import {AppContext} from '../App'


function Home() {
  const [inputText, setInputText] = useState('');
  const [cal,setCal] = useState('');
  const [fat,setFat] = useState('');
  const [protein,setProtein] = useState('');
  const [food,setFood] = useState('');
  const {user,setUser}= useContext(AppContext);

console.log('this is the user from home',user);
 
  const getNu=(param)=>{

    if(param.length<=0){
      return 
    }
    const options = {
      method: 'GET',
      url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
      params: {ingr: param},
      headers: {
        'x-rapidapi-key': '3e62a87d8bmshfa608b6d0308c3fp12ad72jsna5a7d0944074',
        'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
       const {ENERC_KCAL, PROCNT, FAT} = response.data.parsed[0].food.nutrients;
      //ENERC_KCAL  PROCNT  FAT
      setCal(ENERC_KCAL);
      setFat(FAT);
      setProtein(PROCNT);
      setFood(response.data.text);

    }).catch(function (error) {
      console.error(error);
    });
// parsed.food.nutrients
    
  }

  const inputTextHandler=(e)=>{
    console.log(e.target.value);
    // setInputText(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    getNu(inputText);
  }

  const save = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/chart/${protein}/${fat}/${cal}/${food}/${user[0].user_id}`) // like food also do user_id that ull get back from login 
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
    .catch(e=>{
      console.log(e);
    })
  }

  const getData =(e)=>{
    e.preventDefault();

    //fetch data from database for user 

    // fetch(`http://localhost:3001/chart/${protein}/${fat}/${cal}/${food}`) 
    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(data);
    // })
    // .catch(e=>{
    //   console.log(e);
    // })
  }
  
  return (
    <div>
       <form>

        <div className='food-button'>
        <input placeholder='Enter a food..' onChange={(e)=>setInputText(e.target.value)} value={inputText} type="text" className="food-input" />

        <button onClick={submitHandler} >
        <i id='icon1' className="fas fa-plus-square"></i>
        </button>  
        </div>
        
        <div id='side'>
          <div id='food-ate'>
              <p>Calories: {cal}</p>  
              <p>Fats: {fat}</p>
              <p>Proteins: {protein}</p>
          </div>
          <button onClick={save}>
          <i id='icon3' className="fas fa-check"></i>
        </button>
        <button onClick={getData}>
        <i id='icon2' className="fas fa-angle-double-left"></i>
        </button>
        </div>
      </form>
    </div>
  );
}

export default Home;