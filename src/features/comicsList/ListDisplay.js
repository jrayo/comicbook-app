import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { comicsSelector } from '../../slices/comics'
import { Link } from "react-router-dom";
import Moment from 'react-moment';

function ListDisplay(props) {
    
    const result = useSelector(comicsSelector)
    const comics = result.comics

    return (
        <Container>
            <Grid expand="xs" >
                {comics.map(comic =>
                    <Row to={'/comic/'+comic.id} key={comic.id}>
                        <Col size={2}>
                            <Img src={comic.image.original_url} alt={comic.volume.name} />
                        </Col>
                        <Col size={3}>
                            
                            <ComicInfo>
                                <strong>{comic.volume.name} {comic.issue_number.match(/^[0-9]+$/) != null?'#'+comic.issue_number:comic.issue_number}</strong>
                                <DateText>
                                    <Moment format="MMM DD, YYYY">{comic.date_added}</Moment>
                                </DateText>
                            </ComicInfo>
                        </Col>
                        
                    </Row>
                    )
                }
            </Grid>

            
            
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    padding:1em;
`

const ComicInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const DateText = styled.span`
    color:grey;
    font-weight:bold;
    font-size:0.8em;
`

const Img = styled.img`
    width:65%;
    border: 2px solid black;
`

export const Grid = styled.div`
    width:60%;
    ${ (props) => props.expand && media[props.expand](`
		width: 80%;
    `)};
`;

export const Row = styled(Link)`
    display:flex;
    justify-content:center;
    border-bottom: 2px solid #E2E2E2;
    padding-top: 1em;
    padding-bottom: 1em;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color:black;
    };
    &:hover{
        background-color:#a3f090;
        color:#0f3d04;
    }
`

const media = {
	xs: (styles) => `
		@media only screen and (max-width: 480px){
			${styles}
		}
	`
}

export const Col = styled.div`
	flex: ${(props)=>props.size};
	${ (props) => props.collapse && media[props.collapse](`
		display: none;
    `)};
    align-items: center;
    justify-content: center;
    width:100%;
    margin:0px;
`;

export default ListDisplay;
