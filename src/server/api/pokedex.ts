export default defineEventHandler(async (event) => {
  const global_: any = await import('~/assets/pokedex/pokedex/pokedex.json')
  const global: any[] = global_.default
  const sv_: any = await import('~/assets/pokedex/pokedex/Scarlet_Violet/Scarlet_Violet.json')
  const sv: any[] = sv_.default

  const query = getQuery(event)
  const id: number = Number(query.id) || 1
  const area_type: string = String(query.area)
  const index_type: string = String(query.type)

  // var area = "パルデア図鑑"
  
  var area: string
  switch (area_type){
    case "paldea":
      area = "パルデア図鑑"
      break
    default:
      area = "パルデア図鑑"
      break
  }

  let pokedex:{[key: string]: string}
  pokedex = {}

  let pokelist: any
  pokelist = []

  let result: any

  console.log(area_type)
  console.log(area_type)
  console.log(index_type)
  switch (index_type){
    case "index":
      for(var value in sv["pokedex"][area]){
        pokedex = {}
        pokedex["no"] = sv["pokedex"][area][value]["no"]
        // console.log(value)
        // console.log(sv["pokedex"][area][value]["no"])
        // console.log(sv["pokedex"][area][value]["globalNo"])
        // console.log(Number(sv["pokedex"][area][value]["globalNo"]))
        // console.log(global["pokedex"][Number(sv["pokedex"][area][value]["globalNo"])])
        pokedex["name"] = global["pokedex"][Number(sv["pokedex"][area][value]["globalNo"])-1]["name"]["jpn"]
        pokelist.push(pokedex)
      }

      result = pokelist
      break
    case "details":
      // var no = sv["pokedex"][area][id-1]["no"]
      var globalNo = sv["pokedex"][area][id-1]["globalNo"]
      // var name = global["pokedex"][Number(globalNo)-1]["name"]["jpn"]
      // var height = global["pokedex"][Number(globalNo)-1]["height"]
      // var weight = global["pokedex"][Number(globalNo)-1]["weight"]
      // var classi = global["pokedex"][Number(globalNo)-1]["classification"]
      // var type1 = sv["pokedex"][area][id-1]["status"][0]["type1"]
      // var type2 = sv["pokedex"][area][id-1]["status"][0]["type2"]
      pokedex["no"] = sv["pokedex"][area][id-1]["no"]
      pokedex["globalNo"] = sv["pokedex"][area][id-1]["globalNo"]
      pokedex["name"] = global["pokedex"][Number(globalNo)-1]["name"]["jpn"]
      pokedex["height"] = global["pokedex"][Number(globalNo)-1]["height"]
      pokedex["weight"] = global["pokedex"][Number(globalNo)-1]["weight"]
      pokedex["classification"] = global["pokedex"][Number(globalNo)-1]["classification"]
      pokedex["type1"] = sv["pokedex"][area][id-1]["status"][0]["type1"]
      pokedex["type2"] = sv["pokedex"][area][id-1]["status"][0]["type2"]
      pokedex["ability1"] = sv["pokedex"][area][id-1]["status"][0]["ability1"]
      pokedex["ability2"] = sv["pokedex"][area][id-1]["status"][0]["ability2"]
      pokedex["dream_ability"] = sv["pokedex"][area][id-1]["status"][0]["dream_ability"]

      result = pokedex
      break
  }
  return {
    "result": query,
    "pokedex": result
  }
})
