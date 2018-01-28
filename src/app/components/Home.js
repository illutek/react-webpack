import React from "react";

export class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
      age: props.initialeAge
    };
  }


  onMakeOlder() {
    this.setState({
      age: this.state.age + 3

    });

}

  render() {
    // console.log(this.props);
    return (
      <div>
        <p>In a new component!</p>
        <p>Your name is {this.props.name} and your age is {this.state.age}</p>     
        <hr/>
        {/* <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>    */}
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
      </div>
    );
  }

}

Home.propTypes = {
  name: React.PropTypes.string,
  initialeAge: React.PropTypes.number
}