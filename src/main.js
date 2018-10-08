import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Hello
          {' '}
          React-Parcel
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
