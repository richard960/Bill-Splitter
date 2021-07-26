import React from 'react'
import ReactDOM from 'react-dom'
import Inputs from './inputs.jsx'
import Result from './result.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tip: null,
      total: null,
      reset: false
    }
  }
  calculateBill(people, bill, number) {
    if(people < 0 || bill < 0) {
      alert('Values or value cant be less than 0');
      return
    }
    let num = bill * number;
    let rounded = Math.ceil(num * 100) / 100 / people;
    let tip = Math.ceil(rounded * 100) / 100;
    let total = ((num + bill) * 100) / 100 / people;
    let totalRounded = Math.ceil(total * 100) / 100;
    this.setState({
      tip: tip,
      total: totalRounded
    })
  }

  reset() {
    console.log('hello')
    this.setState({
      tip: null,
      total: null,
      reset: !this.state.reset
    })
  }
  render() {
    return (
    <main>
      <div className="Title">BILL <br></br> SPLITTER</div>
      <div className="calculator">
      <Inputs calculateBill={this.calculateBill.bind(this)} reset={this.state.reset}/>
      <Result total={this.state.total} tip={this.state.tip} reset={this.reset.bind(this)}/>
      </div>
    </main>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))