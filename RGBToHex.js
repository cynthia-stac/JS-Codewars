function rgb(r, g, b) {
  if (r < 0) r = 0
  if (r > 255) r = 255
  
  if (g < 0) g = 0
  if (g > 255) g = 255
  
  if (b < 0) b = 0
  if (b > 255) b = 255
  
  let rhex = r.toString(16)
  let ghex = g.toString(16)
  let bhex = b.toString(16)
  
  if (rhex.length === 1) rhex = `0${rhex}`
  if (ghex.length === 1) ghex = `0${ghex}`
  if (bhex.length === 1) bhex = `0${bhex}`
 
    return `${rhex}${ghex}${bhex}`.toUpperCase()
}