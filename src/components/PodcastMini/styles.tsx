import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border-radius: 1px;
  padding: 8px;
  color: inherit;
  box-shadow: 0 3px 10px 0px rgb(0 0 0 / 30%);
`

export const PodcastImage = styled.img`
  display: flex;
  border-radius: 50%;
`

export const Title = styled.p`
    font-size: 16px;
    margin: 8px 0px;
`

export const Description = styled.p`
    font-size: 12px;
    margin: 4px;
    color: grey;
`