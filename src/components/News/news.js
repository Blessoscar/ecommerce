import React from 'react';
import NewsList from '../NewsList/newsList'
import LatestNews from '../Latest/latestNews'
import Profile from '../Profile/profile'

const News = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8" style={{padding:'10px',border:'1px solid #f1f1f1',borderRadius:'5px'}}>
                    <NewsList/>
                    <LatestNews/>
                </div>
                <div className="col-sm-4" style={{minHeight:'100%'}}>
                    <Profile/>
                </div>
            </div>
        </div>
    );
};

export default News;