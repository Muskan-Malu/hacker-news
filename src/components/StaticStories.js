import React, { useEffect, useState } from "react";
import { getData } from "../services/hackerNewsApi";
import {
    GlobalStyle,
    StoriesContainerWrapper,
    StoryHeader,
    NewsContainer,
  } from "../styles/ContainerStyles";
import { Link, BrowserRouter as route, useLocation } from "react-router-dom";
import { BackendStory } from "./BackendStory"

export const StaticStories = () => {
    const location = useLocation();
    console.log(location.state, "param------");
    const [ data, setData ] = useState([]);
    const [ loggedin, setLoggedin ] = useState(location.state ? true : false);
    
    useEffect(() => {
        getData().then(data => setData(data));
    }, []);

    console.log(data, "-------DATA------");

    return (
        <>
        <GlobalStyle />
        <StoriesContainerWrapper>
            <NewsContainer>
            <StoryHeader>
                <li>
                <a href="/top">Hacker News</a>
                </li>
                <li>
                <a href="/new">New Stories</a>
                </li>
                <li>
                <Link to="/static">Static</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </StoryHeader>
                {data.map((data, index) => (
                    <BackendStory key={data.id} data={data} loggedin={loggedin}/>
                ))}
            </NewsContainer>
        </StoriesContainerWrapper>
        </>
    )
}