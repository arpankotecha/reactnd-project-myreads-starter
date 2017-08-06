import React from 'react'

class InputText extends React.Component {
  state = {
    value:''
  }

  onChange(value){
    this.setState({value:value})
    this.props.handleChange(value)
  }

  render() {
    return (
      <div>
      <input type="text" 
        placeholder={this.props.placeholder} 
        onChange={event => this.onChange(event.target.value)}
        value={this.state.value}
      />
    </div>
    )}
}

export default InputText
