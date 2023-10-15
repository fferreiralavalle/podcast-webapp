import styled from 'styled-components'

export const Section = styled.div`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: 340px;
  grid-gap: 16px;
  width: 100%;
  justify-content: center;
`

export const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 16px;
    justify-content: flex-end;
`

export const Filter = styled.input`
    width: 200px;
    margin-right: 8px;
    border: 1px solid grey;
    background: transparent;
    color: inherit;
    padding: 4px;
`

export const ElementAmount = styled.div`
    border-radius: 16px;
    background-color: #4f7dbf;
    color: white;
    padding: 0px 8px;
    width: 50px;
    margin-right: 16px;
`