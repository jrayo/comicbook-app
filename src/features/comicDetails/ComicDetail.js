import React, { useEffect } from 'react';
import { fetchComic, comicSelector, charactersSelector } from '../../slices/comic'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function ComicDetail() {
    const { comic, loading, hasErrors, characters, teams, locations, concepts} = useSelector(comicSelector)
     
    const renderComic = () => {
        if (loading) return(
        <LoadingComponent>
            <FontAwesomeIcon icon={faSpinner} size="3x" spin color={'green'} />
            <p>Loading comic</p>
        </LoadingComponent>
        )
        if (hasErrors) return <p>Cannot display comic...</p>

        return (
            <Grid>
                <Row>
                    
                    <Details>
                        <DetailTitle>Characters</DetailTitle>
                        <ItemWrapper>
                        {characters.length!==0 && characters.map((character,index) =>
                            <Col key={character.name+index} size={2}>
                                <ImgTiny src={character.image.tiny_url} alt={character.name} />
                            <span>{character.name}</span>
                            </Col>
                        )}
                        </ItemWrapper>
                        
                        <DetailTitle>Teams</DetailTitle>
                        {teams.length!==0 && teams.map((team,index) =>
                            <Col key={team.name+index} size={2}>
                                <ImgTiny src={team.image.tiny_url} alt={team.name} />
                            <span>{team.name}</span>
                            </Col>
                        )}
                        <DetailTitle>Locations</DetailTitle>
                        {locations.length!==0 && locations.map((location,index) =>
                            <Col key={location.name+index} size={2}>
                                
                                <ImgTiny src={location.image.tiny_url} alt={location.name} />
                                <span>{location.name}</span>
                            </Col>
                        )}
                        <DetailTitle>Concepts</DetailTitle>
                        {concepts.length!==0 && concepts.map((concept,index) =>
                            <Col key={concept.name+index} size={2}>
                                <ImgTiny src={concept.image.tiny_url} alt={concept.name} />
                            <span>{concept.name}</span>
                            </Col>
                        )}

                    </Details>

                    <Cover>                    
                        {comic.image && <ImgWrapper><Img src={comic.image.original_url} alt={comic.name} /></ImgWrapper>}
                    </Cover>
                    
                </Row>
            </Grid>
            )
        }


    return (
        <>
            {renderComic()}
        </>
        )
}

const LoadingComponent = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-top: 5em;
`
const ImgWrapper = styled.div`
    position: absolute;
    height: 100%;
    top: 10vh;
    right: 0%;
    @media only screen and (max-width: 480px)  {
        position: relative;
        top:0%;
        left:auto;
        display:flex;
        flex:1;
        justify-content:center;
    }
`

const Img = styled.img`
    width:40vw;
    align-self:center;
    right:0;
    @media only screen and (max-width: 480px)  {
        width:60vw;
    }
`

const ImgTiny = styled.img`
    border-radius:3px;
    margin:5px;
`

const DetailTitle = styled.h2`
    border-bottom: 3px solid #E0E0E0
`

const Details = styled.div`
    @media only screen and (max-width: 480px)  {
        order:2;
    }
`
const Cover = styled.div`
    width:100%;
    @media only screen and (max-width: 480px)  {
        order:1;
    }
`

const Grid = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
`;

const Row = styled.div`
    display:grid;
    grid-template-columns: 60% 40%;

    width:80%;

    @media only screen and (max-width: 1024px) and (min-width: 481px)  {
        grid-template-columns: 60% 40%;
    }
        
    @media only screen and (max-width: 480px)  {
        grid-template-columns: 100%;
    }
            
`

const ItemWrapper = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
`

const Col = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    color:#677B67;    
    text-align: center;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color:black;
    };
    &:hover{
        background-color:#a3f090;
        color:#0f3d04;
    }
    `;

export default ComicDetail;
