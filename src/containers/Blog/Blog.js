import React, { Component } from 'react';
// import axios from '../../axios';
import { Route, NavLink} from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {    
    render() {       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/" 
                            exact
                            activeClassName='my-active'
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Home</NavLink></li>
                            <li><NavLink to={{ 
                                pathname:"/new-post",                                
                        }}>New post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts />}/>
                <Route path="/new-post" exact render={() => <Posts />}/> */}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;