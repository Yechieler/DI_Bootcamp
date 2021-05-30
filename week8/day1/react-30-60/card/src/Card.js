import React from 'react';

const Card = (props) => {
    // console.log(props);
    const {data} = props

    const {name,email,id}= data
    return(
        <>
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
            Card
        </div>
        </>
    )

}
export default Card;