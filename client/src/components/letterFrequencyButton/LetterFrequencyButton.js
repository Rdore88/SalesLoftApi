import React, { Component } from 'react';

class LetterFrequencyButton extends Component {
  constructor(props){
    super(props);
      this.findLetterFrequencies = this.findLetterFrequencies.bind(this);
  }

  //this function shaves off the @... part of the email
  organizeEmail(email){
    let splitEmail = email.split("@")
    return splitEmail[0]
  }

  getAllEmails(){
    let emailArray = [];
    this.props.peopleArray.forEach(person => {
      emailArray.push(this.organizeEmail(person.email_address))
    })
    return emailArray
  }

  findLetterFrequencies(event){
    let emailArray = this.getAllEmails()
    console.log(emailArray);
  }

  render() {
    return (
      <button onClick={this.findLetterFrequencies}>Letter Frequencies</button>
    )
  }
}

export default LetterFrequencyButton;
