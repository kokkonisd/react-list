// import React and the css file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let listItems = ['apples', 'oranges', 'wine'];

class Item extends React.Component {
  constructor (props)
  {
    super(props);

    this.state = {
      btnClassName: "delete-off"
    };
  }

  deleteOn ()
  {
    this.setState({
      btnClassName: "delete-on"
    });
  }

  deleteOff ()
  {
    this.setState({
      btnClassName: "delete-off"
    });
  }

  render ()
  {
    return (
      <li key={this.props.value} className={this.props.className} onMouseEnter={() => this.deleteOn()} onMouseLeave={() => this.deleteOff()}>
        <span>{this.props.value}</span>
        <button className={"delete-btn " + this.state.btnClassName}>delete</button>
      </li>
    );
  }
}

class List extends React.Component {


  render ()
  {
    let items = [];
    for (let i = 0; i < listItems.length - 1; i++) {
      items.push(<Item value={listItems[i]} key={listItems[i]} className={"list-item"}/>);
    }
    return (
      <div className="card lead" id="list-card">
        <ul id="list">
          {items}
          <Item value={listItems[listItems.length - 1]} className="list-item last-list-item"/>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
