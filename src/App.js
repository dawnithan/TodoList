import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            count: 0,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let newItem = {
            id: this.state.count, 
            title: event.target[0].value, 
            desc: event.target[1].value
        };
        
        this.setState({count: this.state.count + 1});
        this.setState({items: [...this.state.items, newItem]});
    }

    handleDelete(event) {
        let id = parseInt(event.target.value);

        const items = this.state.items.filter(function (el) {
            return el.id !== id
        });

        this.setState({items: items});
    }

    render() {
        return (
            <div className="container">
                <form className="form spacing" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-4">
                            <input type="input" placeholder="Title..." className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-8">
                            <input type="input" placeholder="Description..." className="form-control" />
                        </div>
                        <div className="col-sm-2">
                            <input type="submit" className="btn btn-primary" value="Add item" />
                        </div>
                    </div>
                </form>
                <div className="row">
                    {
                        this.state.items.map((item, index) => 
                        {
                            return <TodoItem key={item.id} item={item} onDelete={this.handleDelete} />
                        })
                    }
                </div>
            </div>
        );
    }
}

class TodoItem extends Component {
    render () {
        return (
            <div className="col-sm-6">
                <div className="card item">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.title}</h5>
                        <p className="card-text">{this.props.item.desc}</p>
                        <button type="button" className="btn btn-danger" 
                            value={this.props.item.id} 
                            onClick={this.props.onDelete}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default App;
