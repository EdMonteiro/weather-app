import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}

    this.onInputChange = this.onInputChange.bind(this); /*without this line browser throws a error due to the fact that setState isn't defined as a function. Basicly means that we are defining setState to onInputChange*/
  }

  onInputChange(event) {
    this.setState({ term: event.target.value}) /*to update the typed content on searchBar*/
    // console.log(event.target.value)
  }

  onFormSubmit (event) {
    event.preventDefault();
  } /*function serve the porpuse of orevent the browser from send 
  post request - linked with onSubmuit handler*/
  
  render () {
    return (
      <form onSubmit={ this.onFormSubmit } className='input-group'>
        <input 
          placeholder='Get a five day forecast in your favorite cities.'
          className='form-control'
          value={ this.state.term }
          onChange={ this.onInputChange }
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}