import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { Flipped } from "react-flip-toolkit"
import anime from "animejs"
import iconBaseStyles from "../iconBaseStyles"

const StyledLink = styled(Link)`
  color: black;
  width: 100%;
  display: block;
  height: ${props => (props.isFocused ? "80%" : "100%")};
  &:hover {
    text-decoration: underline;
  }
`

const IconGridItem = styled.li`
  grid-column: ${props => (props.isFocused ? "span 3" : "")};
  grid-row: ${props => (props.isFocused ? "span 3" : "")};
  padding: ${props => (props.isFocused ? "2rem" : "0")};
  padding-top: 0;
  svg {
    will-change: transform;
  }
`

const AnimatedIconTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 2rem;
  animation-delay: 0.25s;
  font-size: 1.15rem;
  font-weight: normal;
`

class IconBlock extends PureComponent {
  state = { sampleIcon: true }
  onDelayedAppear = (el, i) => {
    anime({
      targets: el,
      delay: 250 + i * 30,
      opacity: [0, 1],
      scale: [0.25, 1],
      duration: 250,
      easing: "easeOutSine"
    })
    this.setState({ sampleIcon: false })
  }

  render() {
    const { Icon, isFocused, id, name, set } = this.props
    const extraProps = {}
    if (!this.state.sampleIcon) extraProps["data-icon-nonsample"] = true
    return (
      <IconGridItem key={id} isFocused={isFocused} {...extraProps}>
        {isFocused && (
          <Flipped flipId={`${set}-detail-title`}>
            <AnimatedIconTitle>
              <b>Icon:</b>
              &nbsp;
              {name}
            </AnimatedIconTitle>
          </Flipped>
        )}
        <StyledLink
          to={`/${set}/${isFocused ? "" : name}`}
          isFocused={isFocused}
        >
          <Flipped flipId={id} onDelayedAppear={this.onDelayedAppear}>
            <Icon style={{ ...iconBaseStyles }} />
          </Flipped>
        </StyledLink>
      </IconGridItem>
    )
  }
}

export default IconBlock
