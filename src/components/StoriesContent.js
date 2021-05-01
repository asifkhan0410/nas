import React, { useState, useEffect } from 'react';
import './StoriesContent.css'
import StoryCard from './StoryCard';
import Fade from 'react-reveal/Fade';


function StoriesContent() {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(3);
    const [storyType, setStoryType] = useState('new')


    const getStories = async ({storyType}) => {
        setLoading(true);
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/${storyType}stories.json?print=pretty`, {
            headers: {
                'Content-type': 'application/json',
            },
        })
        const apiResponse = await response.json();
        setLoading(false);
        setStories(apiResponse)
    }


    useEffect(() => {
        getStories({storyType});
    }, [storyType])

    const newStories = () => {
        setStoryType('new');
        setCount(3);
    }
    const bestStories = () => {
        setStoryType('best');
        setCount(3);
    }

    return (
        <div className="storiesContent">
           <header>
               <button className='storiesContent__new' onClick={newStories}>New</button>
               <button className='storiesContent__past' onClick={bestStories}>Past</button>
           </header>
           {
                (loading === true) ?
                    <div>
                        <h1>Loading...</h1>
                    </div>
                    :
                    <Fade bottom>
                        <div className="storiesList">
                            {stories.length!==0 && stories.slice(0, `${count}`).map((storyId,index) => {
                                return <Fade bottom><StoryCard key={index} id={storyId}/></Fade>
                            })}
                            <button onClick={() => setCount(count+3)}>Load more</button>
                        </div>
                    </Fade>
            }

        </div>
    )
}

export default StoriesContent
