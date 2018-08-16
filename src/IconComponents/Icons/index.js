const icons = {}
/**
 * I know this looks dumb but apparently you can't use template/dynamic strings with
 * require.context (?)
 */
const EnvironmentalSvgs = require.context("./environmental", false, /\.svg$/)
const ScienceSvgs = require.context("./science", false, /\.svg$/)
const SpaceSvgs = require.context("./space", false, /\.svg$/)
const SportsSvgs = require.context("./sports", false, /\.svg$/)
const DeliverySvgs = require.context("./delivery", false, /\.svg$/)
const RandomSvgs = require.context("./random", false, /\.svg$/)
;[
  ["environment", EnvironmentalSvgs],
  ["science", ScienceSvgs],
  ["space", SpaceSvgs],
  ["sports", SportsSvgs],
  ["delivery", DeliverySvgs],
  ["random", RandomSvgs]
].forEach(([title, svgs]) => {
  const svgsObj = svgs.keys().reduce((acc, key) => {
    const name = key.replace(/^\.\/|\.svg$/g, "").replace(/_/g, "-")
    return acc.concat({
      id : `${title}-${name}`,
      name,
      path: svgs(key)
    })
  }, [])
  icons[title] = svgsObj
})

export default icons
