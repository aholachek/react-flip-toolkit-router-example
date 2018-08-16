import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Flipped } from "react-flip-toolkit"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import anime from "animejs"
import iconDict from "../IconComponents"
import { Contents } from "../BaseComponents"
import IconBlock from "./IconBlock"

const IconSetGrid = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fill, 7.5rem);
  grid-auto-rows: 4.5rem;
  grid-gap: 2rem;
  grid-auto-flow: dense;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 2;
`

const InvertedDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const SetContents = Contents.extend`
  margin-top: 6rem;
  min-height: 80vh;
`

const SetDescription = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  margin-bottom: 3rem;
`

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    text-decoration: underline;
  }
`

class IconSetPage extends Component {
  onComplete = el => {
    anime({
      targets: [...el.querySelectorAll("[data-fade-in]")],
      opacity: [0, 1],
      translateY: [15, 0],
      delay: (el, i) => i * 70 + 200,
      easing: "easeOutSine",
      duration: 350
    })
  }

  onStart = el => {
    ;[...el.querySelectorAll("[data-fade-in]")].forEach(
      el => (el.style.opacity = "0")
    )
  }

  render() {
    const { set, focusedIcon } = this.props.match.params
    return (
      <Flipped
        flipId={set}
        componentId="setPage"
        onComplete={this.onComplete}
        onStart={this.onStart}
      >
        <Background>
          <Flipped inverseFlipId={set}>
            <InvertedDiv>
              <SetContents>
                <SetDescription innerRef={el => (this.description = el)}>
                  <div data-fade-in>
                    <StyledLink
                      to={{
                        pathname: "/",
                        search: this.props.location.search
                      }}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} /> Back
                    </StyledLink>
                  </div>
                  <h1 data-fade-in>
                    {set[0].toUpperCase() + set.slice(1)}
                    &nbsp; Icons
                  </h1>
                  <p data-fade-in>click icon for detail view</p>
                </SetDescription>
                <IconSetGrid>
                  {iconDict[set].map(({ name, Icon, id }) => {
                    return (
                      <IconBlock
                        Icon={Icon}
                        isFocused={name === focusedIcon}
                        id={id}
                        name={name}
                        set={set}
                      />
                    )
                  })}
                </IconSetGrid>
              </SetContents>
            </InvertedDiv>
          </Flipped>
        </Background>
      </Flipped>
    )
  }
}

export default IconSetPage
