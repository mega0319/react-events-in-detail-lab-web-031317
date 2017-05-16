import React from 'react'

class DelayedButton extends React.Component {
  constructor(props){
    super(props)
  }

  afterClick(e){
    e.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, e)
  }

  render() {
    return(
      <button onClick={(e) => this.afterClick(e)}></button>
    )
  }

}

export default DelayedButton
