export default defineEventHandler(async (event) => {
  const ability_: any = await import('~/assets/pokedex/ability/ability.json')
  const abilitys: any[] = ability_.default.ability
  // var ability: any[]

  const query = getQuery(event)
  const game: string = String(query.game)
  const ability: string = String(query.ability)

  let result: any
  // console.log(ability)
  if(game in abilitys[ability]){
    result = abilitys[ability][game]
  }else{
    result = ""
  }

  return {
    "result": "ability",
    "ability": result,
  }    
})
