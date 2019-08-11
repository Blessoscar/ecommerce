import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Layout from './hoc/layout';
import Home from './components/Home/home'
import Blog from './components/Blog/blog';
import News from './components/News/news';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/news" exact component={News}/>
            </Switch>
        </Layout>
    );
};

export default Routes;