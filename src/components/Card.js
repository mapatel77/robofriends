import React from 'react';
import 'tachyons';

const Card = ({name, email, id}) =>{

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='myimage' src={`https://www.robohash.org/${id}.png?size=200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    );
};

export default Card;    