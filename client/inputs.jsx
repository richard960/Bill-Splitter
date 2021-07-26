/* eslint-disable react/prop-types */
import React from 'react';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: '',
      bill: '',
      isBillZero: false,
      isPeopleZero: false
    }
  }
  checkForZero() {
    let zero = false;
    if(!this.state.people) {
      this.setState({
        isPeopleZero: true
      })
      zero = true;
    }
    if(!this.state.bill) {
      this.setState({
        isBillZero: true
      })
      zero = true;
    }
    return zero;
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/prop-types
    if(this.props.reset !== prevProps.reset) {
      this.setState({
        people: '',
        bill: '',
        isBillZero: false,
        isPeopleZero: false
      })
    }
  }

  render() {
    let billStyle;
    let peopleStyle;
    if(this.state.isBillZero) {
     billStyle = {border: '2px solid red'}
    } else {
      billStyle = {border: 'none'}
    }
    if(this.state.isPeopleZero) {
      peopleStyle = {border: '2px solid red'}
    } else {
      billStyle = {border: 'none'}
    }
    return(
  <div className='inputs'>
    <div className='leftside'>
      <br></br>
      <label htmlFor='bill'>Bill {this.state.isBillZero && <span id="billed"style={{color: 'red'}}className='hidden'>Cant be zero</span>} </label>
      <input type='number' id='bill' placeholder='0' style={billStyle} value={this.state.bill} onChange={(e) => {
        let result = Number(e.target.value);
        console.log('result', result);
        this.setState({
          bill: Number(e.target.value),
          isBillZero: result === 0 ? true : false
        })
      }}></input>
      <span id='dollar'>$</span>
      <br></br>
      <h3>Select Tip %</h3>
      <div className="buttons">
        <button onClick={() => {
          let isZero = this.checkForZero();
          if(isZero) {
            return
          }
          let {people, bill} = this.state
          this.props.calculateBill(people, bill, .05);
        }}>5%</button>
        <button onClick={() => {
          let isZero = this.checkForZero();
          if(isZero) {
            return
          }
          let {people, bill} = this.state
          this.props.calculateBill(people, bill, .10);
        }}>10%</button>
        <button onClick={() => {
          let isZero = this.checkForZero();
          if(isZero) {
            return
          }
          let {people, bill} = this.state
          this.props.calculateBill(people, bill, .15);
        }}>15%</button>
        <button onClick={() => {
          let isZero = this.checkForZero();
          if(isZero) {
            return
          }
          let {people, bill} = this.state
          this.props.calculateBill(people, bill, .25);
        }}>25%</button>
        <button onClick={() => {
          let isZero = this.checkForZero();
          if(isZero) {
            return
          }
          let {people, bill} = this.state
          this.props.calculateBill(people, bill, .50);
        }}>50%</button>
        <button onClick={() => {
          let isZero = this.checkForZero();
          if(isZero) {
            return
          }
          let {people, bill} = this.state
          this.props.calculateBill(people, bill, .100);
        }}>100%</button>
      </div>
      <label htmlFor='people'>Number of People {this.state.isPeopleZero && <span style={{color: 'red'}}className='hidden'>Cant be zero</span>}</label>
      <input type='number' id='people' placeholder='0' style={peopleStyle} value={this.state.people} onChange={(e) => {
         let result = Number(e.target.value);
        this.setState({
          people: Number(e.target.value),
          isPeopleZero: result === 0 ? true : false
        })
      }}></input>
      <img src='user.png'></img>
    </div>
  </div>
    )
  }

}


export default Inputs