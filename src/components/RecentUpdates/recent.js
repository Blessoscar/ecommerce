import React from 'react';

const RecentUpdates = () => {

    let num=['/images/3.jpg','/images/7.jpg','/images/5.jpg','/images/4.jpg','/images/6.jpg','/images/5.jpg']
    const renderList=()=>{

        return num.map((item,i)=>(
            <div key={i} className="col-sm-4">
                <img className='img img-responsive' style={{}} src={item} alt='card'></img>
                <div>
                    <p>Hello lets be happy</p>
                </div>
            </div>
            )
        )
    }
    
    return (
        <div>
            <div className='row recent' >
                <h3>RECENT UPDATES</h3>
                {renderList()}
            </div>
        </div>
    );
};

export default RecentUpdates;