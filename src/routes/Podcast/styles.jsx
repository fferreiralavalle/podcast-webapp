import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const LeftContent = styled.div`
  display: flex;
  width: 300px;
  height: fit-content;
  padding: 16px;
  flex-direction: column;
  box-shadow: 0 3px 10px 0px rgb(0 0 0 / 30%);
  margin-right: 80px;
`

export const MainContent = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
`
export const PodcastImage = styled.img`
  display: flex;
  width: 70%;
  align-self: center;
  margin-bottom: 24px;
  border-radius: 8px;
`

export const TitleDescription = styled.div`
  padding-left: 16px;
  margin-bottom: 16px;
`

export const Title = styled.p`
    font-size: 16px;
    margin: 0px;
    text-align: left;
    font-weight: bold;
`

export const DescriptionTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin: 4px 0px;
`

export const Description = styled.p`
    font-size: 12px;
    margin: 0px;
    text-align: left;
`

export const Episodes = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 3px 10px 0px rgb(0 0 0 / 30%);
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 48px;
`
export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 3px 10px 0px rgb(0 0 0 / 30%);
  padding: 12px;
`