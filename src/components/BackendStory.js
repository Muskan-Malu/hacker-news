import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoryTitle, StoryWrapper, StoryMeta, StoryMetaElement } from "../styles/StoryStyles";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import axios from "axios";


export const BackendStory = ({data, loggedin}) => {
    const navigate = useNavigate();
    const [story, setStory] = useState({});
    const [flag, setFlag] = useState(0);
    
    var date = new Date(story.time * 1000);
    var formattedTime = date.toString().slice(4, 25);

    useEffect(() => {
        setStory(data)
    }, []);

    const voteUp = async () => {
        if(loggedin) {
            if(flag == 0) {
                const body = {
                    id: story.id,
                    score: story.score
                };
                const response = await axios.post("http://localhost:5000/vote", body)
                .then(response => setStory(response.data[0]));
            } else {
                console.log("HEYY!!")
                alert("YOU'VE ALREADY VOTED!!")
            }
            setFlag(1);
        }
        else {
            navigate('/login');
        }
    }

    return story && story.url ? (
        <StoryWrapper>
            <StoryTitle>
                <ArrowDropUpIcon onClick={voteUp} />
                <a href={story.url}>{story.title}</a>   
            </StoryTitle>
            <StoryMeta> 
                <span>
                    <StoryMetaElement color="#000">Score:</StoryMetaElement> {story.score}
                </span>
                <span>
                    <StoryMetaElement color="#000">By:</StoryMetaElement>
                    <Link to={`/user/${story.by}.json`}>{story.by}</Link>
                </span>
                <span>
                    <StoryMetaElement color="#000">Posted:</StoryMetaElement>{formattedTime}
                </span>
                <span>
                    <StoryMetaElement color="#000">Comments:</StoryMetaElement> 
                    {story.descendants !== 0 ? 
                        <Link to={`/userComments/${story.id}`}>{story.descendants}</Link> : 0
                    }
                </span>
            </StoryMeta>
        </StoryWrapper>
    ) : null;
}
