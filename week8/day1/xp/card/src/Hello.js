import React from 'react';
function Hello() {
    return (
      <>
        <Ex6 />
      </>
    );
  }
const Ex1_xp = () =>{
    return(
        <div>
            <h2 >Hello World!</h2>
            
        </div>
    )
}
export default Hello;

const Ex2= ()=>{
    const myelement = <h1>I Love JSX!</h1>;
    return(
        <>{myelement}</>

    );
}
const Ex3 =()=> {
    const word = <h1> JSX </h1>;
    return (
      <>
        <h1>I do not use {word}!</h1>
      </>
    );
}
  const Ex4=()=> {
    const sum = 5 + 5;
    const phrase = <h1>react is {sum} times better with jsx</h1>;
    return <>{phrase}</>;
}
const Ex5=()=> {
    const fruits = (
        <div>
          <li>banana</li> <li>apple</li> <li>kiwi</li>
        </div>
      );
      const list = <ul> {fruits} </ul>;
      return <>{list}</>;
}
const Ex6 =()=> {
    const header1 = (
        <header>
          <h1>I am a header</h1>
        </header>
      );
      const header2 = (
        <header>
          <h1> I am a header too </h1>
        </header>
      );
      return (
        <>
          {header1}
          {header2}
        </>
      );
}
const Ex7=()=>{
    const input = <input type='text' />
    return<>{input}</>
}
const Ex8=()=>{
    const name = "John";
  const age = 12;
  const phrase = (
    <h1>
      {name} is {age} years old
    </h1>
  );
  return <>phrase</>;
}