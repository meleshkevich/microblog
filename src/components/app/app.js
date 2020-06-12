import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list'; 
import PostAddForm from '../post-add-form'; 

import './app.css'; 

const App = () => {

    const data = [
        {label:'Start to learn React', important: true, id: 'asdf'},
        {label:'React is great!', important: false, id: 'gdfg'},
        {label:'So flexible...', important: false, id: 'kfmnj'}
    ]

    return (
        <div className='app'>
        <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
     
        )
}

export default App;