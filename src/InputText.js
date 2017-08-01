import React from 'react'

class InputText extends React.Component {
  state= {
    value: ""
  }

  updateText(text){
    this.setState({
      value:text}, 
      () => this.props.handleChange(this.state.value))
  }

  render() {
    return (
      <input type="text" 
        placeholder={this.props.placeholder} 
        onChange={event => this.updateText(event.target.value)}
        value={this.state.value}
      />
    )}
}

export default InputText
