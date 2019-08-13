import styled from "styled-components"

export const CardGrid = styled.ul`
  display: ${props => (props.display === "grid" ? "grid" : "block")};
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
  > li {
    display:block;
    margin-bottom: ${props => (props.display === "grid" ? 0 : "1.5rem")};
    height: ${props => (props.display === "grid" ? 'auto' : "5.75rem")};
  }
`

export const Controls = styled.div`
  padding: 2.5rem 0;
  display: flex;
  justify-content: flex-end;
  > div {
    margin-left: 2rem;
  }
`

export const Toggle = styled.button`
  background: ${props => (props.active ? "black" : "transparent")};
  color: ${props => (props.active ? "white" : "black")};
  position: relative;
  z-index: ${props => (props.active ? 2 : 1)};

  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  &:nth-of-type(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }
  &:nth-of-type(2) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  svg:nth-of-type(2) {
    margin-left: 0.5rem;
  }
  &:hover {
    background-color: ${props => (props.active ? "black" : "#f1f1f1")};
  }
`

export const NoResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  font-weight: bold;
  font-size: 1.4rem;
`
