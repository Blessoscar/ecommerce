import React from 'react';

const LatestNews = () => {
    let num=[1,2,3]
    const renderList=()=>{

        return num.map((item,i)=>(
                <div key={i} className='row' style={{background:'#f1f1f1',padding:'5px',margin:'5px'}}>
                    <div style={{fontWeight:'bold',color:'gray',fontSize:'15px'}}>Title <span style={{float:'right',paddingRight:'5px'}}>19/06/2019</span></div>
                    <div>
                        <p style={{textAlign:'left'}}>
                            fhfhfjfgfhffjfhfjfghfytfrts setrdrddyresrs erstrddredredsdjhkjhjhhhjkj
                        </p>
                    </div>
                </div>
            )
        )
    }
    
    return (
        <div >
            <h3>LATEST NEWS</h3>
            {renderList()}
        </div>
    );
};

export default LatestNews;