import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list'; 
import PostAddForm from '../post-add-form'; 

import './app.css'; 
import styled from 'styled-components';

const AppBlock = styled.div `
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {

    maxId = 100;

    constructor(props) {                        //Conservative way of coding iso class fields
        super(props);
        this.state = {
            data : [
                {label:'Start to learn React', important: true, id: this.maxId++}, //add id generator
                {label:'React is great!', important: false, id: this.maxId++},
                {label:'So flexible...', important: false, id: this.maxId++}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    
    }

    deleteItem(id) {
        this.setState( ({data}) => {
            const idx = data.findIndex( elem => elem.id === id);

            const before = data.slice(0, idx);
            const after = data.slice(idx + 1);

            const newArr = [...before, ...after]; // alternatively: = [...data.slice(0, idx),...data.slice(idx + 1)]
            return {
                data: newArr 
            }
        });
    }


    render () {
        return (
        <AppBlock>
        <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={this.state.data}
            onDelete= {this.deleteItem} />
            <PostAddForm/>
        </AppBlock>
        )
    }
}