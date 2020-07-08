import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { comicsSelector, selectComic  } from '../../slices/comics'
import { Link } from "react-router-dom";

function GridDisplay(props) {
    const result = useSelector(comicsSelector)
    const comics = result.comics

    return (
        <Container>
            <Grid>
                <Row>
                    {comics.map(comic =>
                            <Col to={'/comic/'+comic.id}  key={comic.id} size={2}>
                                <Img src={comic.image.original_url} alt={comic.volume.name} />
                                <ComicInfo>
                                    <strong>{comic.volume.name} {comic.issue_number.match(/^[0-9]+$/) != null?'#'+comic.issue_number:comic.issue_number}</strong>
                                    <DateText>{comic.date_added}</DateText>
                                </ComicInfo>
                            </Col>
                        )
                    }
                </Row>
            </Grid>

            
            
        </Container>
    );
}

const Container = styled.div`

    width:100%;
    padding-top:1em;
`

const ComicInfo = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:flex-end;
    margin-top:1em;
`

const DateText = styled.p`
    margin-top:0;
    color:grey;
    font-weight:bold;
    font-size:0.8em;
`

const Img = styled.img`
    width:60%;
    border: 2px solid black;
    align-self:center;
    box-shadow:1px;
`

const Grid = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Row = styled.div`
    display:grid;
    grid-template-columns: 25% 25% 25% 25%;

    width:80%;

    @media only screen and (max-width: 1024px) and (min-width: 481px)  {
        grid-template-columns: 33% 33% 33%;
    }
        
    @media only screen and (max-width: 480px)  {
    grid-template-columns: 50% 50%;.
    }
        
`

const Col = styled(Link)`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 1em;
    margin-bottom:1em;
    
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

export default GridDisplay;
