import React, { Component } from 'react';
import { Row,Col} from 'reactstrap';


export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red','blue','green','yellow','purple','brown'],
      activeColor: "",
      randomNumber: []
    }
 
  }

  componentDidMount() {
    let random = [];
    for(let i=0; i<40; i++) {
      random.push(Math.floor(Math.random() * this.state.colors.length));
    }
    this.setState({
      randomNumber: random
    });
  }

  //display color tile
  colorBox = () => {
    let Color = [];
    let num = 0;

    for(let indexRow = 1; indexRow <= 8; indexRow++){
      let Column = [];
  
      for(let indexCol = 1; indexCol <= 5; indexCol++){
        const randomColor = this.state.colors[this.state.randomNumber[num++]];
        let hide = this.state.activeColor == "" || randomColor == this.state.activeColor;//hiding color
        let visible = !hide ? "hidden" : "visible";
        Column.push(
          <div style={{backgroundColor: randomColor, visibility: visible, width:"100px",height:"100px"}}>
          </div>
        )
      }
      Color.push(<Row>{Column}</Row>)
    }
    
    return Color;
  }
  

  //filter the color
  filter = e => {
    this.setState({
      activeColor: e.target.value
    });
  }

  render () {
    return (
        <div>
          
       <h1>Color</h1>
       <h1 fontSize="10px">Type the color name to filter : <input onChange={this.filter} /></h1>
       {this.colorBox()}

      </div>
    );
  }
}
