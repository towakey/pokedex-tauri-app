export default defineEventHandler(async (event) => {
  const global_: any = await import('~/assets/pokedex/pokedex/pokedex.json')
  const global: any[] = global_.default

  const query = getQuery(event)
  const id: number = Number(query.id) || 1
  const area_type: string = String(query.area)
  const index_type: string = String(query.type)

  // var area = "パルデア図鑑"

  var areaPokedex_: any
  var areaPokedex: any[]
  
  var area: string
  var indexMax: Number
  switch (area_type){
    case "global":
      area = "global"
      break
    case "galar":
      area = "ガラル図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/Sword_Shield/Sword_Shield.json')
      areaPokedex = areaPokedex_.default
      break
    case "paldea":
      area = "パルデア図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/Scarlet_Violet/Scarlet_Violet.json')
      areaPokedex = areaPokedex_.default
      indexMax = 400
      break
    default:
      area = "global"
      break
  }

  let pokedex:{[key: string]: string}
  pokedex = {}

  let pokelist: any
  pokelist = []

  let result: any

  // console.log(area_type)
  // console.log(index_type)
  if(area == "global"){
    switch (index_type){
      case "index":
        console.log("global:index")
        for(var value in global["pokedex"]){
          pokedex = {}
          pokedex["no"] = global["pokedex"][value]["id"]
          pokedex["name"] = global["pokedex"][value]["name"]["jpn"]
          pokelist.push(pokedex)
        }

        result = pokelist
        break
      // case "details":
      //   var globalNo = areaPokedex["pokedex"][area][id-1]["globalNo"]
      //   pokedex["no"] = areaPokedex["pokedex"][area][id-1]["no"]
      //   pokedex["globalNo"] = areaPokedex["pokedex"][area][id-1]["globalNo"]
      //   pokedex["name"] = global["pokedex"][Number(globalNo)-1]["name"]["jpn"]
      //   pokedex["height"] = global["pokedex"][Number(globalNo)-1]["height"]
      //   pokedex["weight"] = global["pokedex"][Number(globalNo)-1]["weight"]
      //   pokedex["classification"] = global["pokedex"][Number(globalNo)-1]["classification"]
      //   pokedex["type1"] = areaPokedex["pokedex"][area][id-1]["status"][0]["type1"]
      //   pokedex["type2"] = areaPokedex["pokedex"][area][id-1]["status"][0]["type2"]
      //   pokedex["ability1"] = areaPokedex["pokedex"][area][id-1]["status"][0]["ability1"]
      //   pokedex["ability2"] = areaPokedex["pokedex"][area][id-1]["status"][0]["ability2"]
      //   pokedex["dream_ability"] = areaPokedex["pokedex"][area][id-1]["status"][0]["dream_ability"]
      //   pokedex["hp"] = areaPokedex["pokedex"][area][id-1]["status"][0]["hp"]
      //   pokedex["attack"] = areaPokedex["pokedex"][area][id-1]["status"][0]["attack"]
      //   pokedex["defense"] = areaPokedex["pokedex"][area][id-1]["status"][0]["defense"]
      //   pokedex["special_attack"] = areaPokedex["pokedex"][area][id-1]["status"][0]["special_attack"]
      //   pokedex["special_defense"] = areaPokedex["pokedex"][area][id-1]["status"][0]["special_defense"]
      //   pokedex["speed"] = areaPokedex["pokedex"][area][id-1]["status"][0]["speed"]

      //   result = pokedex
      //   break
    }
  } else {
    switch (index_type){
      case "index":
        console.log("mode:"+index_type)
        console.log("area:"+area)
        for(var value in areaPokedex["pokedex"][area]){
          pokedex = {}
          pokedex["no"] = areaPokedex["pokedex"][area][value]["no"]
          if(pokedex["no"]!=""){
            pokedex["name"] = global["pokedex"][Number(areaPokedex["pokedex"][area][value]["globalNo"])-1]["name"]["jpn"]
            pokelist.push(pokedex)
          }
        }
        result = pokelist
        break
      case "details":
        result = []
        var globalNo
        var localNo

        // globalNo = areaPokedex["pokedex"][area][id-1]["globalNo"]
        // pokedex["no"] = areaPokedex["pokedex"][area][id-1]["no"]
        // pokedex["globalNo"] = areaPokedex["pokedex"][area][id-1]["globalNo"]
        // pokedex["name"] = global["pokedex"][Number(globalNo)-1]["name"]["jpn"]
        // pokedex["height"] = global["pokedex"][Number(globalNo)-1]["height"]
        // pokedex["weight"] = global["pokedex"][Number(globalNo)-1]["weight"]
        // pokedex["classification"] = global["pokedex"][Number(globalNo)-1]["classification"]
        // pokedex["type1"] = areaPokedex["pokedex"][area][id-1]["status"][0]["type1"]
        // pokedex["type2"] = areaPokedex["pokedex"][area][id-1]["status"][0]["type2"]
        // pokedex["ability1"] = areaPokedex["pokedex"][area][id-1]["status"][0]["ability1"]
        // pokedex["ability2"] = areaPokedex["pokedex"][area][id-1]["status"][0]["ability2"]
        // pokedex["dream_ability"] = areaPokedex["pokedex"][area][id-1]["status"][0]["dream_ability"]
        // pokedex["hp"] = areaPokedex["pokedex"][area][id-1]["status"][0]["hp"]
        // pokedex["attack"] = areaPokedex["pokedex"][area][id-1]["status"][0]["attack"]
        // pokedex["defense"] = areaPokedex["pokedex"][area][id-1]["status"][0]["defense"]
        // pokedex["special_attack"] = areaPokedex["pokedex"][area][id-1]["status"][0]["special_attack"]
        // pokedex["special_defense"] = areaPokedex["pokedex"][area][id-1]["status"][0]["special_defense"]
        // pokedex["speed"] = areaPokedex["pokedex"][area][id-1]["status"][0]["speed"]
        // result = pokedex

        // console.log("ID:"+id)

        pokedex = {}
        localNo = Number(id - 2)
        // console.log("0:"+localNo)
        if(localNo == -1){
          result[0]=""
          // console.log("0:"+globalNo)
        }else{
          globalNo = Number(areaPokedex["pokedex"][area][id - 2]["globalNo"] - 1)
          // console.log("0:"+globalNo)
          pokedex["no"] = areaPokedex["pokedex"][area][localNo]["no"]
          pokedex["globalNo"] = areaPokedex["pokedex"][area][localNo]["globalNo"]
          pokedex["name"] = global["pokedex"][globalNo]["name"]["jpn"]
          pokedex["height"] = global["pokedex"][globalNo]["height"]
          pokedex["weight"] = global["pokedex"][globalNo]["weight"]
          pokedex["classification"] = global["pokedex"][globalNo]["classification"]
          pokedex["type1"] = areaPokedex["pokedex"][area][localNo]["status"][0]["type1"]
          pokedex["type2"] = areaPokedex["pokedex"][area][localNo]["status"][0]["type2"]
          pokedex["ability1"] = areaPokedex["pokedex"][area][localNo]["status"][0]["ability1"]
          pokedex["ability2"] = areaPokedex["pokedex"][area][localNo]["status"][0]["ability2"]
          pokedex["dream_ability"] = areaPokedex["pokedex"][area][localNo]["status"][0]["dream_ability"]
          pokedex["hp"] = areaPokedex["pokedex"][area][localNo]["status"][0]["hp"]
          pokedex["attack"] = areaPokedex["pokedex"][area][localNo]["status"][0]["attack"]
          pokedex["defense"] = areaPokedex["pokedex"][area][localNo]["status"][0]["defense"]
          pokedex["special_attack"] = areaPokedex["pokedex"][area][localNo]["status"][0]["special_attack"]
          pokedex["special_defense"] = areaPokedex["pokedex"][area][localNo]["status"][0]["special_defense"]
          pokedex["speed"] = areaPokedex["pokedex"][area][localNo]["status"][0]["speed"]
          result[0]=pokedex
        }

        pokedex = {}
        localNo = Number(id - 1)
        globalNo = Number(areaPokedex["pokedex"][area][id - 1]["globalNo"] - 1)
        // console.log("1:"+localNo)
        // console.log("1:"+globalNo)

        pokedex["no"] = areaPokedex["pokedex"][area][localNo]["no"]
        pokedex["globalNo"] = areaPokedex["pokedex"][area][localNo]["globalNo"]
        pokedex["name"] = global["pokedex"][globalNo]["name"]["jpn"]
        pokedex["height"] = global["pokedex"][globalNo]["height"]
        pokedex["weight"] = global["pokedex"][globalNo]["weight"]
        pokedex["classification"] = global["pokedex"][globalNo]["classification"]
        pokedex["type1"] = areaPokedex["pokedex"][area][localNo]["status"][0]["type1"]
        pokedex["type2"] = areaPokedex["pokedex"][area][localNo]["status"][0]["type2"]
        pokedex["ability1"] = areaPokedex["pokedex"][area][localNo]["status"][0]["ability1"]
        pokedex["ability2"] = areaPokedex["pokedex"][area][localNo]["status"][0]["ability2"]
        pokedex["dream_ability"] = areaPokedex["pokedex"][area][localNo]["status"][0]["dream_ability"]
        pokedex["hp"] = areaPokedex["pokedex"][area][localNo]["status"][0]["hp"]
        pokedex["attack"] = areaPokedex["pokedex"][area][localNo]["status"][0]["attack"]
        pokedex["defense"] = areaPokedex["pokedex"][area][localNo]["status"][0]["defense"]
        pokedex["special_attack"] = areaPokedex["pokedex"][area][localNo]["status"][0]["special_attack"]
        pokedex["special_defense"] = areaPokedex["pokedex"][area][localNo]["status"][0]["special_defense"]
        pokedex["speed"] = areaPokedex["pokedex"][area][localNo]["status"][0]["speed"]
        result[1]=pokedex

        pokedex = {}
        localNo = Number(id)
        // console.log("2:"+localNo)
        if(localNo >= indexMax){
          result[2]=""
          // console.log("2(true):"+globalNo)
        }else{
          globalNo = Number(areaPokedex["pokedex"][area][id]["globalNo"] - 1)
          // console.log("2(false):"+globalNo)
          pokedex["no"] = areaPokedex["pokedex"][area][localNo]["no"]
          pokedex["globalNo"] = areaPokedex["pokedex"][area][localNo]["globalNo"]
          pokedex["name"] = global["pokedex"][globalNo]["name"]["jpn"]
          pokedex["height"] = global["pokedex"][globalNo]["height"]
          pokedex["weight"] = global["pokedex"][globalNo]["weight"]
          pokedex["classification"] = global["pokedex"][globalNo]["classification"]
          pokedex["type1"] = areaPokedex["pokedex"][area][localNo]["status"][0]["type1"]
          pokedex["type2"] = areaPokedex["pokedex"][area][localNo]["status"][0]["type2"]
          pokedex["ability1"] = areaPokedex["pokedex"][area][localNo]["status"][0]["ability1"]
          pokedex["ability2"] = areaPokedex["pokedex"][area][localNo]["status"][0]["ability2"]
          pokedex["dream_ability"] = areaPokedex["pokedex"][area][localNo]["status"][0]["dream_ability"]
          pokedex["hp"] = areaPokedex["pokedex"][area][localNo]["status"][0]["hp"]
          pokedex["attack"] = areaPokedex["pokedex"][area][localNo]["status"][0]["attack"]
          pokedex["defense"] = areaPokedex["pokedex"][area][localNo]["status"][0]["defense"]
          pokedex["special_attack"] = areaPokedex["pokedex"][area][localNo]["status"][0]["special_attack"]
          pokedex["special_defense"] = areaPokedex["pokedex"][area][localNo]["status"][0]["special_defense"]
          pokedex["speed"] = areaPokedex["pokedex"][area][localNo]["status"][0]["speed"]
          result[2]=pokedex
        }
        break
    }
  }
  console.log(result)
  return {
    "result": query,
    "pokedex": result
  }
})
