import React from 'react'
import {connect} from 'react-redux'

import SearchResult from './SearchResult'
import {getBias} from '../actions'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bias: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(getBias(this.state.bias))
    this.setState({bias: ''})
  }

  render() {
    return (
      <div className="search-form">
        <SearchResult />
        <form className="search-box-wrapper" action="/bias" method="get" onSubmit={this.handleSubmit.bind(this)}>
          <p><input type="text" name='bias' placeholder='Enter your word' className="search-box-input" value={this.state.bias} onChange={this.handleChange.bind(this)} /></p>
          <p><input type='submit' value='Neutralise!' className="search-box-button"/></p>
        </form>
      </div>
    )
  }
}

export default connect()(SearchBox)
