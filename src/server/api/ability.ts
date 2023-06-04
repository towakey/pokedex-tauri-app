export default defineEventHandler(async (event) => {
  const ability_: any = await import('~/assets/pokedex/ability/ability.json')
  const abilitys: any[] = ability_.default.ability
  // var ability: any[]

  const query = getQuery(event)
  const game: string = String(query.game)
  const ability: string = String(query.ability)

  let result: any

  result = abilitys[ability][game]


  return {
    "result": "ability",
    "ability": result,
  }    
})
