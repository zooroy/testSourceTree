import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>;
      </div>
    );
  }
}

export default Hello;
