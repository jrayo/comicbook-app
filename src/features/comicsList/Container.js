import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh, faSpinner } from '@fortawesome/free-solid-svg-icons';
import GridDisplay from './GridDisplay';
import ListDisplay from './ListDisplay'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComics, comicsSelector } from '../../slices/comics'

function Container() {
  const [typeOfView, setTypeOfView] = React.useState('list')

  const [comicsList, setComicsList] = React.useState([])

  const handleIconColor = (typeOfComponent) => {
    if(typeOfView===typeOfComponent){
      return 'green'
    }
    else if(typeOfView!==typeOfComponent){
      return 'black'
    }
  }

//  fetching data with redux
  const dispatch = useDispatch()
  const { comics, loading, hasErrors } = useSelector(comicsSelector)

  useEffect(() => {
    dispatch(fetchComics())
  }, [dispatch])

// comics state

  const renderComics = () => {
      if (loading) return(
        <LoadingComponent>
          <FontAwesomeIcon icon={faSpinner} size="3x" spin color={'green'} />
          <p>Loading comics...</p>
        </LoadingComponent>
      )
      if (hasErrors) return <LoadingComponent>Network error, cannot display comics.</LoadingComponent>

      return typeOfView === 'list'? <ListDisplay comics={comics} />:<GridDisplay />
        

  }

  return (
    <ContainerView>
      <Header>
        <Title> ComicBook </Title>
        <Menu>
            <b>Latest Issues</b>
            <DisplayType>
                <List onClick={ () => setTypeOfView('list')}>
                  <FontAwesomeIcon icon={faList} color={handleIconColor('list')} />
                  <SpanText active={(typeOfView===('list')?true:false)} > List </SpanText>
                </List>

                <Grid onClick={ () => setTypeOfView('grid')}>
                  <FontAwesomeIcon icon={faTh} color={handleIconColor('grid')} />
                  <SpanText active={(typeOfView===('grid')?true:false)} > Grid </SpanText>
                </Grid>
            </DisplayType>

        </Menu>
        
      </Header>

            {renderComics()}
    </ContainerView>
    );
}

const ContainerView = styled.div`
  background-color:#F2F2F2;
  height: 100vh;
  width: 100vw;
  overflow-x:hidden;
  `

const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width:100vw;
`

const Title = styled.h1`
  display: flex;
  font-weight: bold;
  flex: 1;
  margin:0px;
  padding:30px;
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content:space-between;
  width:80vw;
  margin:0px;
  border-top: 3px solid #E2E2E2;
  border-bottom: 3px solid #E2E2E2;
`

const DisplayType= styled.div`
  width:8em;
  display:flex;
`
const List = styled.div`
  padding-left:0.5em;
  padding-right:0.5em;
  &:hover {
    cursor: pointer;
  }
`

const Grid = styled.div`
  padding-left:0.5em;
  padding-right:0.5em;
  &:hover {
    cursor: pointer;
  }
`

const SpanText = styled.span`


  ${({ active }) => active && `
  color green;
  `}
  }
`

const LoadingComponent = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-top: 5em;
`

export default Container;
