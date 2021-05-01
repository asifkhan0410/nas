import React, { useEffect, useState } from 'react';
import clocksvg from '../assets/clock.svg';
import ReactTimeAgo from 'react-time-ago'

const StoryCard = ({ id }) => {
    const [details, setDetails] = useState({})

    const getStoryData = async (id) => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
            headers: {
                'Content-type': 'application/json',
            },
        })

        const storyDetails = await response.json();
        console.log(storyDetails)
        storyDetails.type==='story' && setDetails(storyDetails)
    }


    useEffect(() => {
        getStoryData(id);
    }, [id])


    return (
        <a href={details.url} target="_blank" rel="noreferrer">
            <div key={details.id} className='storycard'>            
                <h2>{details.title}</h2>
                <p>Hey! Introducing myself, I'm Asif Ali Khan a Front-end Developer. I believe in doing interesting things that matters so that the learning curve shoudn't have a negative slope.</p>
                <div className="storycard__info"><img src={clocksvg} alt='clock'/> {details.time && <ReactTimeAgo date={new Date(details.time*1000)} locale="en-US" timeStyle="round"/>} | {details.score} points by {details.by}</div>
            </div>
        </a>
    );
}

export default StoryCard;