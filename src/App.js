import React, { Component } from "react"
import { Route, withRouter } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"
import IndexPage from "./IndexPage"
import { Contents } from "./BaseComponents"
import { Flipper } from "react-flip-toolkit"
import WorldIcon from "./IconComponents/environmental/World"

const Header = styled.header`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid black;
  width: 100%;
  z-index: 1;
  position: relative;
  background-color: #e6e6e6;
  z-index: 3;
  a {
    color: black;
    &:hover {
      font-weight: bold;
    }
  }
  h1 {
    font-weight: normal;
    font-size: 1rem;
    display: inline;
  }
`

const FlexContents = Contents.extend`
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled.a`
  text-decoration: underline;
`

class App extends Component {
  render() {
    return (
      <Flipper
        flipKey={this.props.location.pathname + this.props.location.search}
        decisionData={{
          location: this.props.location,
          search: this.props.search
        }}
      >
        <Header>
          <FlexContents>
            <div>
              <Link to="/">
                <WorldIcon style={{ width: "20px", marginRight: ".5rem" }} />
                <h1> Icon Demo App</h1>
              </Link>
            </div>
            <div>
              <StyledLink href="https://github.com/aholachek/react-flip-toolkit">
                React-Flip-Toolkit
              </StyledLink>
            </div>
          </FlexContents>
        </Header>
        <Route path="/" component={IndexPage} />
      </Flipper>
    )
  }
}

export default withRouter(App)
