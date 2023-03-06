// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstBtn: false, lastBtn: false}

  showHideFirstName = () => {
    const {firstBtn} = this.state
    if (firstBtn === true) {
      this.setState({firstBtn: false})
    } else {
      this.setState({firstBtn: true})
    }
  }

  showHideLastName = () => {
    const {lastBtn} = this.state
    if (lastBtn === true) {
      this.setState({lastBtn: false})
    } else {
      this.setState({lastBtn: true})
    }
  }

  render() {
    const {firstBtn, lastBtn} = this.state
    return (
      <div className="cont">
        <h1 className="head">Show/Hide</h1>
        <div className="btn-cont">
          <div className="inner-btn-cont">
            <button
              className="btn"
              type="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstBtn ? <p className="display">Joe</p> : null}
          </div>
          <div>
            <button
              className="btn"
              type="button"
              onClick={this.showHideLastName}
            >
              Show/Hide Lastname
            </button>
            {lastBtn ? <p className="display">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
