import React from 'react';
import Card from './Card';

export interface IRobot {
    id: number,
    name: string,
    email: string
}

export interface IRobots {
    robots: Array<IRobot>
}

const CardList = ({ robots }: IRobots) => {
    return (
        <div>
            {
                robots.map((user) => {
                    return (
                        <Card 
                            key = {user.id} 
                            id = {user.id} 
                            name = {user.name} 
                            email = {user.email} 
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;