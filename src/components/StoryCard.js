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
        <div key={details.id}>
            <a href={details.url} target="_blank" rel="noreferrer">
                <h2>{details.title}</h2>
            </a>
        </div>
    );
}

export default StoryCard;