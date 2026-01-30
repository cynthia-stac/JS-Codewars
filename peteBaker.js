function cakes(recipe, available) {
  let possibleCakes = []

  for (let ingredient in recipe) {
    if (!available[ingredient]) return 0

    possibleCakes.push(
      Math.floor(available[ingredient] / recipe[ingredient])
    )
  }

  return Math.min(...possibleCakes)
}