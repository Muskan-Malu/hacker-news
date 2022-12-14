import React, { useEffect, useState } from "react";
import { getStory, getStoryIds, newStoriesUrl } from "../services/hackerNewsApi";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  PageTitle,
  StoriesContainerWrapper,
  StoryHeader,
  NewsContainer,
} from "../styles/ContainerStyles";
import { Link, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState(Array.from({ length: 20 }));
  const param = useParams();

  // const populateData = async () => {
  //   const ids = storyIds.slice(0, 21);

  //   ids.map(storyId => {
  //     let data = getStory(storyId);
  //     data.then(async function(result) {
  //       console.log(result, "result");
  //         await axios.post('http://localhost:5000/fetchData', result)
  //         .then(function (response) {
  //           console.log(response, "response");
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     })
  //   })
  // }

  const fetchData = () => {
    setTimeout(() => {
        if(storyIds.length >= 500) {
            setStoryIds(storyIds.concat(Array.from({ length: 20 })))
        }
    }, 500);
  }

  useEffect(() => {
    getStoryIds(param.story).then((data) => setStoryIds(data));
  }, []);
  console.log(storyIds.length, "length");

  // useEffect(() => {
  //   populateData();
  // })

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
          </StoryHeader>
          {/* <PageTitle>
                        <a href={newStoriesUrl}>Hacker News Stories</a>
                    </PageTitle> */}
          <InfiniteScroll
            dataLength={storyIds.length}
            next={fetchData}
            hasMore={storyIds.length !== 500}
            loader={<h4>Loading...</h4>}
            
          >
            {storyIds.map((storyId, index) => (
              <Story key={storyId} storyId={storyId} />
            ))}
          </InfiniteScroll>
        </NewsContainer>
      </StoriesContainerWrapper>
    </>
  );
};
