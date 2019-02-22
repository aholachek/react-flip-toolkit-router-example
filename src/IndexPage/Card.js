import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Flipped } from "react-flip-toolkit"
import anime from "animejs"
import { BaseGridList } from "../BaseComponents"
import { CardGrid } from "./Components"
import iconBaseStyles from "../iconBaseStyles"

// using CSS inheritance here to allow the use of PureComponents
// for better performance
const IndexGrid = styled(BaseGridList)`
  width: 100%;
  grid-auto-rows: 3rem;
  ${CardGrid + '[display="grid"]'} & {
    grid-template-columns: repeat(3, 5rem);
    grid-gap: 2rem;
    margin-bottom: 2rem;
  }
  ${CardGrid + '[display="list"]'} & {
    grid-template-columns: repeat(6, 5rem);
    grid-gap: 3rem;

    svg {
      max-height: 4rem;
    }
  }
`

const IndexListItem = styled.li`
  display: flex;
  justify-content: center;
`

const Card = styled.li`
  height: 100%;
  transition: box-shadow 0.5s;
  background-color: white;
  overflow: hidden;
  position: relative;
  will-change: transform;
  svg {
    will-change: transform;
  }
`

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  will-change: transform;
  ${CardGrid + '[display="grid"]'} & {
    flex-direction: column;
    padding: 1.5rem;
  }
  ${CardGrid + '[display="list"]'} & {
    flex-direction: row;
    padding: 1rem;
  }
`

const Description = styled.div`
  min-width: 280px;
  text-align: right;
  text-decoration: none !important;
  color: black;

  > *:last-child {
    margin-bottom: 0 !important;
  }
`

const ListFlex = styled.div`
  ${CardGrid + '[display="grid"]'} & {
    display: block;
  }
  ${CardGrid + '[display="list"]'} & {
    display: flex;
    > div:first-of-type {
      margin-right: 1rem;
    }
  }

  justify-content: flex-end;
  > * {
    margin-bottom: 0.5rem;
  }
`

const CardHeader = styled.h2`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const IconCount = styled.span`
  display: inline-block;
  font-weight: bold;
`

const Price = styled.span`
  display: inline-block;
`

class IconSetCard extends PureComponent {
  static propTypes = {
    setKey: PropTypes.string,
    highlightedIcons: PropTypes.array,
    iconCount: PropTypes.number
  }

  onStart = (el, prevLocation, currentLocation) => {
    if (
      prevLocation.location.pathname.match(this.props.setKey) &&
      currentLocation.location.pathname === "/"
    ) {
      ;[...el.querySelectorAll("[data-fade-in]")].forEach(
        el => (el.style.opacity = "0")
      )
      el.style.zIndex = "5"
    }
  }

  onComplete = (el, prevLocation, currentLocation) => {
    if (
      currentLocation.location.pathname === "/" &&
      prevLocation.location.pathname.match(this.props.setKey)
    ) {
      anime({
        targets: el.querySelectorAll("[data-fade-in]"),
        opacity: [0, 1],
        translateY: [15, 0],
        delay: (el, i) => i * 70 + 300,
        easing: "easeOutSine",
        duration: 350
      })
      el.style.zIndex = ""
    }
  }

  onDelayedAppear = (el, index) => {
    anime({
      targets: el,
      opacity: [0, 1],
      scale: [0.9, 1],
      easing: "easeOutSine",
      delay: index * 40,
      duration: 400
    })
  }

  onExit = (el, index, removeElement) => {
    anime({
      targets: el,
      opacity: 0,
      scale: 0.9,
      easing: "easeOutSine",
      duration: 400,
      delay: index * 40,
      complete: removeElement
    })
  }

  navigate = () => {
    this.props.navigate(this.props.setKey)
  }

  shouldFlip = (prev, current) => {
    const sort1 =
      current.location.search.match(/sort=([^&]+)/) &&
      current.location.search.match(/sort=([^&]+)/)[1]
    const sort2 =
      prev.location.search.match(/sort=([^&]+)/) &&
      prev.location.search.match(/sort=([^&]+)/)[1]
    return sort1 === sort2
  }

  render() {
    const { setKey, icons, iconCount } = this.props
    return (
      <Flipped
        flipId={setKey}
        stagger
        onStart={this.onStart}
        onComplete={this.onComplete}
        onDelayedAppear={this.onDelayedAppear}
        onExit={this.onExit}
        shouldInvert={this.shouldFlip}
      >
        <Card onClick={this.navigate}>
          <Flipped inverseFlipId={setKey}>
            <CardContent>
              <IndexGrid>
                {icons.filter(obj => obj.highlighted).map(({ Icon, id }) => {
                  return (
                    <IndexListItem key={id}>
                      <Flipped flipId={id} shouldFlip={this.shouldFlip}>
                        <Icon style={iconBaseStyles} />
                      </Flipped>
                    </IndexListItem>
                  )
                })}
              </IndexGrid>
              <Description ref={el => (this.description = el)}>
                <Flipped
                  flipId={`${setKey}-title`}
                  translate
                  shouldFlip={this.shouldFlip}
                >
                  <CardHeader data-fade-in>
                    {setKey[0].toUpperCase() + setKey.slice(1)} Icons
                  </CardHeader>
                </Flipped>
                <ListFlex>
                  <div>
                    <Flipped
                      flipId={`${setKey}-count`}
                      translate
                      shouldFlip={this.shouldFlip}
                    >
                      <IconCount data-fade-in>{iconCount} icons</IconCount>
                    </Flipped>
                  </div>
                  <div>
                    <Flipped
                      flipId={`${setKey}-price`}
                      translate
                      shouldFlip={this.shouldFlip}
                    >
                      <Price data-fade-in>${iconCount / 2}</Price>
                    </Flipped>
                  </div>
                </ListFlex>
              </Description>
            </CardContent>
          </Flipped>
        </Card>
      </Flipped>
    )
  }
}

export default IconSetCard
