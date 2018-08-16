const icons = {}
/**
 * I know this looks dumb but apparently you can't use template/dynamic strings with
 * require.context (?)
 */
const EnvironmentalSvgs = require.context("./environmental", false, /\.js$/)
const ScienceSvgs = require.context("./science", false, /\.js$/)
const SpaceSvgs = require.context("./space", false, /\.js$/)
const SportsSvgs = require.context("./sports", false, /\.js$/)
const DeliverySvgs = require.context("./delivery", false, /\.js$/)
const RandomSvgs = require.context("./random", false, /\.js$/)
;[
  ["environment", EnvironmentalSvgs],
  ["science", ScienceSvgs],
  ["space", SpaceSvgs],
  ["sports", SportsSvgs],
  ["delivery", DeliverySvgs],
  ["random", RandomSvgs]
].forEach(([title, svgs]) => {
  const svgsArray = svgs.keys().reduce((acc, key) => {
    const name = key.replace(/^\.\/|\.js$/g, "").replace(/_/g, "-")
    return acc.concat({
      id: `${title}-${name}`,
      name,
      Icon: svgs(key).default
    })
  }, [])
  // randomize the icons to show on the index page
  const highlightedIcons = svgsArray
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .slice(0, 6)
  icons[title] = svgsArray.map(
    obj =>
      highlightedIcons.includes(obj) ? { ...obj, highlighted: true } : obj
  )
})

export default icons
