/*
  Simple shopping/todo list in React.js
  Written by Dimitris Kokkonis
*/

// import React and the css file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Class for the items of the list */
class Item extends React.Component {
  constructor (props)
  {
    super(props);

    // delete buttons are invisible by default
    this.state = {
      deleteBtnFlag: "delete-off"
    };
  }

  deleteOn ()
  {
    // show delete buttons on hover
    this.setState({
      deleteBtnFlag: "delete-on"
    });
  }

  deleteOff ()
  {
    // hide delete buttons if the user is not hovering over the item
    this.setState({
      deleteBtnFlag: "delete-off"
    });
  }

  render ()
  {
    return (
      <li key={this.props.value}
        className={this.props.className}
        onMouseEnter={() => this.deleteOn()}
        onMouseOver={() => this.deleteOn()}
        onMouseLeave={() => this.deleteOff()}>

        <div className="row">
          <span className="col-9 col-md-10">{this.props.value}</span>
          <button className={"col-2 col-md-1 btn btn-danger " + this.state.deleteBtnFlag}
            onClick={() => this.props.onClick()}>
            <i className="fa fa-remove"></i>
          </button>
        </div>
      </li>
    );
  }
}

/* Class for the list of items itself */
class List extends React.Component {
  constructor (props)
  {
    super(props);

    // put some items in there by default
    this.state = {
      listItems: ["apples", "oranges", "cheese"]
    }
  }

  // render the i-th item of the list
  renderListItem (i)
  {
    let listItems = this.state.listItems;
    return (
      <Item value={listItems[i]} key={listItems[i]} className={"list-item"} onClick={() => this.removeItem(i)}/>
    );
  }

  // remove the i-th item of the list
  removeItem (i)
  {
    // get a copy of the current state of the items list
    let listItems = this.state.listItems;
    let newListItems = listItems.slice();

    // remove the i-th element
    if (i === 0) {
      newListItems.shift();
    } else if (i === listItems.length - 1) {
      newListItems.pop();
    } else {
      newListItems = listItems.slice(0, i).concat(listItems.slice(i + 1, listItems.length));
    }

    // update the state
    this.setState({
      listItems: newListItems
    });
  }

  // add a new item
  addItem ()
  {
    let listItems = this.state.listItems;
    let newItem = document.getElementById("new-item");
    // if new item is empty or already exists, don't add it
    if (!newItem.value || newItem.value === "" || listItems.indexOf(newItem.value) !== -1) {
      return;
    }

    // update the state
    this.setState({
      listItems: listItems.concat([newItem.value])
    });

    // wipe the input form clean
    newItem.value = "";
  }

  // if enter is pressed while focused on the input, add the item
  handleEnter (e)
  {
    if (e.key === "Enter") {
      this.addItem()
    }
  }

  render ()
  {
    // get and render all the individual items
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
            <li className="row list-item list-add">
              <input className="col-8 col-md-9 lead"
                id="new-item"
                onKeyPress={(e) => this.handleEnter(e)}
                placeholder="enter a new item here..." />
              <button className="btn btn-success col-2 col-md-1" onClick={() => this.addItem()}>
                <i className="fa fa-plus"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-12 text-center mx-auto signature">
          made by <a className="name" href="https://github.com/kokkonisd">kokkonisd</a> using <a className="source" href="https://reactjs.org/">react.js</a>
        </div>
      </div>
    )
  }
}

// render everything
ReactDOM.render(
  <List />,
  document.getElementById('root')
);
