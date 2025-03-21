import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count1: 1,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count1}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          increase count
        </button>
      </div>
    );
  }
}

export default UserClass;
