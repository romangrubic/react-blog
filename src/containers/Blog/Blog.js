import React, { Component } from 'react';
// import axios from '../../axios';
import { Route} from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {    

    

    render() {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/newPost">New post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <Posts />}/>
                <Route path="/new-post" exact render={() => <Posts />}/>

            </div>
        );
    }
}

export default Blog;