import React from 'react';
import SliderView from '../widgets/SliderView/sliderView'
import RecentUpdates from '../RecentUpdates/recent';
import NewsList from '../NewsList/newsList';
import LatestNews from '../Latest/latestNews';
import Profile from '../Profile/profile';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8" style={{padding:'10px',border:'1px solid #f1f1f1',borderRadius:'5px'}}>
                    <SliderView/>
                    <RecentUpdates/>
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

export default Home;