import React, { Component } from "react";
import "..//Styles/Cssfile.css";

//import { fabric } from "fabric";

class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      memearr: [],
      top: "",
      randimg: "https://i.imgflip.com/30b1gx.jpg",
    };

    this.Generate = this.Generate.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.Textgen = this.Textgen.bind(this);
  }

  componentDidMount() {
    //const url = "https://api.imgflip.com/get_memes";

    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        if (memes === undefined) console.log("error");
        console.log(memes[0]);
        this.setState({ memearr: memes });
      });
  }

  handlechange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.top);
  }

  Generate(event) {
    event.preventDefault();
    const randnum = Math.floor(Math.random() * this.state.memearr.length);
    const randmemimg = this.state.memearr[randnum].url;
    this.setState({ randimg: randmemimg });
    window.alert("Meme - " + this.state.memearr[randnum].name);
  }

  Textgen(event) {
    event.preventDefault();

    // var fabricCanvas = new fabric.Canvas("c");

    //  var text = new fabric.Text("hello", { left: 300, top: 400 });

    //  fabricCanvas.add(text);

    // window.alert(fabricCanvas);
  }

  render() {
    console.log("it renders", this.state.top);
    return (
      <div>
        <div className='Meme-form'>
          <div className='wrap'>
            <img src={this.state.randimg} alt='error' />
            <p className='fun'>{this.state.top}</p>
          </div>
          <input
            className='input'
            type='text'
            placeholder='Enter text'
            name='top'
            value={this.state.top}
            onChange={this.handlechange}
          />
          <button className='textboy' onClick={this.Textgen}>
            Text
          </button>
          <button className='random' onClick={this.Generate}>
            RANDOM
          </button>
        </div>
      </div>
    );
  }
}

export default Fetch;
