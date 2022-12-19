import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-box-string: border-box;
                box-sizing: border-box;
    }
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
                box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        color: #202020;
        background-color: #fafafe;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    center {
        display: block;
        text-align: -webkit-center;
    }
`;

export const StoryHeader = styled.ul`
    background-color: #FAAB78; 
    list-style-type: none;
    text-align: center;
    margin: 0;
    padding: 0;

    li {
        display: inline-block;
        font-size: 25px;
        padding: 20px;
        font-family: 'Times New Roman', serif;
        color: #2e2e2c;
        text-decoration: none;
        text-decoration-color: aliceblue;
    }
`;

export const StoriesContainerWrapper = styled.main`
    max-width: 1140px;
    padding: 20px 15px;
    margin: auto;
    alignment: center;
    border: 2px #cccc
    box-shadow: 0 0 15px 5px grey;
`;

export const PageTitle = styled.h1`
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;

    a{
        color: #2e2e2c;
        background-color: #f8dc3d;
        text-decoration: none;
    }
`;

export const NewsContainer = styled.div`
    background-color: #FEFCF3;
`;