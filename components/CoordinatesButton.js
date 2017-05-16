import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props){
    super(props)
  }


  afterClick(e){
    let x = e.clientX
    let y = e.clientY
    this.props.onReceiveCoordinates([x, y])
  }

  render() {
    return(
      <button onClick={(e) => this.afterClick(e)}></button>
    )
  }
}

export default CoordinatesButton
