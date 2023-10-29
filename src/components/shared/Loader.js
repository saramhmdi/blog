import React from 'react';
import {ColorRing} from 'react-loader-spinner'
const Loader = () => {
    return (
        <div style={
            {
               width : '100% ',
               height : '1000px' ,
               display : 'flex',
               justifyContent : 'center' , 
               paddingTop : '80px',
            }}>
            <ColorRing
                visible={true}
                height="200"
                width="200"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    );
};

export default Loader;    