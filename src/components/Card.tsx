import React from 'react';

export interface ICardProps {
    name: string,
    email: string,
    id: number
}



const Card = ({name, email, id}: ICardProps) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?size=200x200&set=set4`}/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;