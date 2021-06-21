import React from 'react';
import {connect} from 'react-redux';

const MovieDetails = (props) => {
  return(
    <div>
      <h1>Movie Details</h1>
      <h4>title: {props.details.title}</h4>
      <h4>releaseDate: {props.details.releaseDate}</h4>
      <h4>rating: {props.details.rating}</h4>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    details: state.details
  }
}
export default connect(mapStateToProps,null)(MovieDetails)
