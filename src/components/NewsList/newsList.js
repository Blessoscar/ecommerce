import React from 'react';

const NewsList = () => {
    let num=['/images/6.jpg','/images/7.jpg','/images/3.jpg']
    const renderList=()=>{

        return num.map((item,i)=>(
                <div key={i} className='row' style={{background:'#f1f1f1',padding:'5px',margin:'5px'}}>
                <div className='col-xs-4' style={{padding:'0'}}>
                    <img className='img img-responsive' src={item} alt='pic'/>
                </div>
                <div className='col-xs-8'>
                    <div style={{fontWeight:'bold',color:'gray',fontSize:'15px'}}>Title</div>
                    <div>
                        <p style={{textAlign:'left'}}>
                            fhfhfjfgfhffjfhfjfghfytfrts setrdrddyresrs erstrddredredsdjhkjhjhhhjkj
                        </p>
                        
                    </div>
                </div>
            </div>
            )
        )
    }
    
    return (
        <div >
            <h3>TOP NEWS</h3>
            {renderList()}
        </div>
    );
};

export default NewsList;