import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const MainContent = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
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