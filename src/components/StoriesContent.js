import React, { useState, useEffect } from 'react';
import './StoriesContent.css'
import StoryCard from './StoryCard';

function StoriesContent() {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(3);


    const getStories = async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', {
            headers: {
                'Content-type': 'application/json',
            },
        })
        const apiResponse = await response.json();
        setLoading(false);
        setStories(apiResponse)
    }


    useEffect(() => {
        getStories();
    }, [])

    return (
        <div className="storiesContent">
           <header>
               <button className='storiesContent__new'>New</button>
               <button className='storiesContent__past'>Past</button>
           </header>
           {
                (loading === true) ?
                    <div>
                        <h1>LOading...</h1>
                    </div>
                    :
                    <div className="storiesList">
                        {stories.length!==0 && stories.slice(0, `${count}`).map((storyId,index) => {
                            return <StoryCard key={index} id={storyId}/>
                        })}
                        <button onClick={() => setCount(count+3)}>Load more</button>
                    </div>
            }

        </div>
    )
}

export default StoriesContent
