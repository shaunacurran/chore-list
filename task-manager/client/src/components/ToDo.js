import React, { Component } from 'react';


export default class ToDo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }


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

    createTasks(item) {
        return <li key={item.key}>{item.text}
            <button onClick={(e) => this.delete(item.key, e)}>Done</button>
        </li>
    }

    delete(key) {
        this.deleteItem(key);
    }

    render() {
        var todoEntries = this.state.items;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input ref={(a) => this._inputElement = a}>
                        </input>
                        <button onClick={this.addItem}>Add</button>
                    </form>
                </div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}
