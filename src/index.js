// import React and the css file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
        <div className="row">
          <span className="col-9 col-md-10">{this.props.value}</span>
          <button className={"col-2 col-md-1 btn btn-danger delete-btn " + this.state.btnClassName} onClick={() => this.props.onClick()}>
            <i className="fa fa-remove"></i>
          </button>
        </div>
      </li>
    );
  }
}

class List extends React.Component {
  constructor (props)
  {
    super(props);

    this.state = {
      listItems: ["apples", "oranges", "cheese"]
    }
  }

  renderListItem (i)
  {
    let listItems = this.state.listItems;
    return (
      <Item value={listItems[i]} key={listItems[i]} className={"list-item"} onClick={() => this.removeItem(i)}/>
    );
  }

  removeItem (i)
  {
    let listItems = this.state.listItems;
    let newListItems = listItems.slice();

    if (i === 0) {
      newListItems.shift();
    } else if (i === listItems.length - 1) {
      newListItems.pop();
    } else {
      newListItems = listItems.slice(0, i).concat(listItems.slice(i + 1, listItems.length));
    }

    this.setState({
      listItems: newListItems
    });
  }

  addItem ()
  {
    let listItems = this.state.listItems;
    let newItem = document.getElementById("new-item").value;
    if (!newItem || newItem === "" || listItems.indexOf(newItem) !== -1) {
      return;
    }

    this.setState({
      listItems: listItems.concat([newItem])
    });
  }

  handleEnter (e)
  {
    if (e.key === "Enter") {
      this.addItem()
    }
  }

  render ()
  {
    let listItems = this.state.listItems;
    let items = [];
    for (let i = 0; i < listItems.length; i++) {
      items.push(this.renderListItem(i));
    }
    return (
      <div className="row">
        <div className="card lead col-12 col-md-8 col-md-offset-2" id="list-card">
          <ul id="list">
            {items}
            <li className="row list-item last-list-item list-add">
              <input className="col-8 col-md-9 lead" id="new-item" onKeyPress={(e) => this.handleEnter(e)}/>
              <button className="btn btn-success col-2 col-md-1" onClick={() => this.addItem()}>
                <i className="fa fa-plus"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
