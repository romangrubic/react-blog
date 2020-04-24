import React, { Component } from 'react';
// import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

// Loading component asynchronosly only when it is visited by user to better performance
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})


class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName='my-active'
                                activeStyle={ {
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                } }>Posts</NavLink></li>
                            <li><NavLink to={ {
                                pathname: "/new-post",
                            } }>New post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts />}/>
                <Route path="/new-post" exact render={() => <Posts />}/> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={ AsyncNewPost } /> : null}
                    <Route path="/posts" component={ Posts } />
            {/* 404 route page with render or you can make 404 component */}
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Redirect from='/' to='/posts' />                     */}
                </Switch>
            </div>
        );
    }
}

export default Blog;