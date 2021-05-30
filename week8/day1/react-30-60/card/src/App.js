import logo from './logo.svg';
import './App.css';
import Card from './Card';
import 'tachyons';

const robots = [
  {
    id:1,
    name:'Artem',
    email:'artem@gmail.com'
  },
  {
    id:2,
    name:'Jay',
    email:'Jay@gmail.com'
  },
  {
    id:3,
    name:'John',
    email:'John@gmail.com'
  }
]


function App(){
  return (
    <> 
    {
      robots.map(item =>{
        return <Card data={item}/>
      })
    }
    </> 
    // <Card name={robot[0]} email={robot[0].email} id={robot[0].id} />
    // <Card name={robot[1]} email={robot[1].email} id={robot[1].id} />
    // <Card name={robot[2]} email={robot[2].email} id={robot[2].id} />
  );
}
// function App(){
//   return (
//     <> 
//     <Card name={'Artem'} email={'artem@gmail.com'} id={'1'} />
//     <Card name={'Shy'} email={'Shy@gmail.com'} id={'2'} />
//     <Card name={'Dan'} email={'Dan@gmail.com'} id={'3'} />
//     </>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
