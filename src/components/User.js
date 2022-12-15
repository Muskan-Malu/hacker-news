import { getSuggestedQuery } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../services/hackerNewsApi";
import { NewsContainer, StoryHeader } from "../styles/ContainerStyles";
import {
  GlobalStyle,
  UserContainerWrapper,
  UserContainer,
  UserCard,
} from "../styles/UserStyles";

export const User = () => {
  const [user, setUser] = useState([]);
  const [storyIds, setStoryIds] = useState([]);
  const param = useParams();

  var date = new Date(user.created * 1000);
  var formattedTime = date.toString().slice(0, 25);

  useEffect(() => {
    getUser(param.userId).then((data) => setUser(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <UserContainerWrapper>
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
        <UserCard>
          <p>UserId: {user.id}</p>
          <p>CreatedAt: {formattedTime}</p>
          <p>Karma: {user.karma}</p>
          <p>
            {" "}
            Submitted:
            <Link to={`/userSubmission/${user.id}`}>Submission</Link>
          </p>
        </UserCard>
      </UserContainerWrapper>
    </>
  );
};

//data && data.url && setUser(data)
