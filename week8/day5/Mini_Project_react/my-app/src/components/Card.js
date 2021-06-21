import React from 'react';
// import propTyes 

const Card =(props)=> {
    return (
      <header>
      <h1>{props.title}</h1>
    </header>
  );
}
Card.defaultProps ={
  title: 'Task',
}

export default Card;
