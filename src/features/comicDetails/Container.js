import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { fetchComic } from '../../slices/comic'
import { getId } from "../../helpers/urlUtils"
import ComicDetail from './ComicDetail'
import { Link } from "react-router-dom";

function Container() {

    const dispatch = useDispatch()
 
  
    useEffect(() => {
        const comicPathId = getId(window.location.pathname)
        dispatch(fetchComic(comicPathId))
    }, [dispatch])
    
  return (
    <ContainerView>
      <Header to={'/'}>
            <Title> ComicBook </Title>
      </Header>

            <ComicDetail />
    </ContainerView>
    );
}

const ContainerView = styled.div`
  background-color:#F2F2F2;
  height: 100vh;
  width: 100%;
  overflow-x:hidden;
  `

const Header = styled(Link)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color:black;
};
`

const Title = styled.h1`
    display: flex;
    flex: 1;
    margin:0px;
    padding:30px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    };
`

export default Container;
