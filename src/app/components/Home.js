import React from "react";

export class Home extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <p>In a new component!</p>
        <p>Your name is {this.props.name}</p>
        <p>The user Object values are {this.props.user.name} - {this.props.user.age}</p>
        <div>
          <h4>Hobbies are</h4>
          {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </div>
        {this.props.children}
      </div>

    );
  }

}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
}