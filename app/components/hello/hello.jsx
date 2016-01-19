import './hello.scss';
import React from 'react';

export default class Hello extends React.Component {
  render() {

    const hello = [
      {
        'id': 1,
        'text': 'hello'
      },
      {
        'id': 2,
        'text': 'there'
      },
      {
        'id': 3,
        'text': 'what\'s'
      },
      {
        'id': 4,
        'text': 'up?'
      },
    ];

    return (
      <div
      className="nav">
        <ul>{hello.map( (item) =>
          <li key={item.id}>{item.text}</li>
        )}</ul>
      </div>
    );
  }
}
