import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count1: 2,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count1}</h2>
      </div>
    );
  }
}

export default UserClass;
