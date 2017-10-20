import React, { Component } from 'react'
import { TextInput } from 'react-native';
// import { object } from 'prop-types'

export default class LabelledTextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    // const {

    // } = this.props
    return (
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    )
  }
}
