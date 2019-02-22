import React from "react"
import { Router } from "react-router"
import { Route, Link } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
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

const FlexContents = styled(Contents)`
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled.a`
  text-decoration: underline;
`

const history = createBrowserHistory()

const cachedPush = history.push

// override history.push method to allow to exit animations and delayed FLIP
history.push = ({ state: { animate, ...restState } = {}, ...locationData }) => {
  const passThroughData = { state: restState, ...locationData }
  if (animate) {
    animate().then(() => cachedPush(passThroughData))
  } else {
    cachedPush(passThroughData)
  }
}

const App = () => (
  <Router history={history}>
    <Route
      render={({ location, search }) => {
        return (
          <Flipper
            flipKey={location}
            decisionData={{
              location,
              search
            }}
          >
            <Header>
              <FlexContents>
                <div>
                  <Link to="/">
                    <WorldIcon
                      style={{ width: "20px", marginRight: ".5rem" }}
                    />
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
            <IndexPage />
          </Flipper>
        )
      }}
    />
  </Router>
)

export default App
