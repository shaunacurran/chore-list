import React, { Component } from 'react';
import HomeTasks from './HomeTasks'
import axios from 'axios'

export default class AddStudent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

//     postData() {axios.get('/api/students/all')
//     .then(response => {
  
//     })
//     .catch(error => {
//       console.log('Error fetching and parsing data', error);
//     });
// }

    addItem(e) {
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift(
                {
                    text: this._inputElement.value,
                    key: Date.now()
                }
            );

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}>
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <HomeTasks entries={this.state.items}
                            delete={this.deleteItem}/>
            </div>
        );
    }
}
