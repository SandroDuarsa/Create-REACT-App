import React, { Component } from 'react';
import { Row,Col} from 'reactstrap';


export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red','blue','green','yellow','purple','brown'],
      activeColor: "all",
      display: true
    }
 
  }


  //display color tile
  colorBox = () => {
  let Color = [];

    for(let indexRow = 1; indexRow <= 8; indexRow++){
      let Column = [];
  
      for(let indexCol = 1; indexCol <= 5; indexCol++){
        const num = Math.floor(Math.random() * this.state.colors.length);
        const randomColor = this.state.colors[num];
        const hide = this.state.activeColor == "all" || randomColor == this.state.activeColor;//hiding color
        Column.push(
          <div style={{backgroundColor: randomColor, width:"100px",height:"100px"}} hidden={!hide}>
          </div>
        )
      }
      Color.push(<Row>{Column}</Row>)
    }
    
    return Color;
  }
  

  //filter the color
  filter = e => {
    console.log(e.target.value)
    this.setState({
      activeColor: e.target.value
    });
  }

  render () {
    return (
        <div>
          
       <h1>Color</h1>
       <h1 fontsize="10px">Type the color name to filter : <input onChange={this.filter} /></h1>
       {this.colorBox()}

      </div>
    );
  }
}
