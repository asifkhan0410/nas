import React, { useEffect, useState } from 'react';

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
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
            </div>
        </a>
    );
}

export default StoryCard;