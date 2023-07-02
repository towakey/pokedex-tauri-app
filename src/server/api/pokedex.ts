// import Config from 'chart.js/dist/core/core.config'

export default defineEventHandler(async (event) => {
  const global_: any = await import('~/assets/pokedex/pokedex/pokedex.json')
  const global: any[] = global_.default

  const query = getQuery(event)
  const id: number = Number(query.id)
  const area_type: string = String(query.area)
  const index_type: string = String(query.type)

  var areaPokedex_: any
  var areaPokedex: any[]
  
  var area: string
  var indexMin: Number
  var indexMax: Number
  var offset: Number      // イッシュ図鑑ではビクティニが図鑑No.0の為の対応

  const gameList: { [key: string]: string } = {
    "kanto": "Red_Green_Blue_Yellow",
    "johto": "Gold_Silver_Crystal",
    "hoenn": "Ruby_Sapphire_Emerald",
    "sinnoh": "Diamond_Pearl_Platinum",
    "unova_bw": "Black_White",
    "unova_b2w2": "Black2_White2",
    "central_kalos": "X_Y",
    "coast_kalos": "X_Y",
    "mountain_kalos": "X_Y",
    "alola_sm": "Sun_Moon",
    "alola_usum": "UltraSun_UltraMoon",
    "galar": "Sword_Shield",
    "isle_of_armor": "Sword_Shield",
    "crown_tundra": "Sword_Shield",
    "hisui": "LegendsArceus",
    "paldea": "Scarlet_Violet",
  }

  switch (area_type){
    case "global":
      area = "global"
      indexMax = 1008
      break
    case "kanto":
        area = "カントー図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/Red_Green_Blue_Yellow/Red_Green_Blue_Yellow.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 151
        offset = 0
        break
    case "johto":
        area = "ジョウト図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/Gold_Silver_Crystal/Gold_Silver_Crystal.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 251
        offset = 0
        break
    case "hoenn":
        area = "ホウエン図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/Ruby_Sapphire_Emerald/Ruby_Sapphire_Emerald.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 202
        offset = 0
        break
    case "sinnoh":
        area = "シンオウ図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/Diamond_Pearl_Platinum/Diamond_Pearl_Platinum.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 210
        offset = 0
        break
    case "unova_bw":
        area = "イッシュ図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/Black_White/Black_White.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 155
        offset = 1
        break
    case "unova_b2w2":
        area = "イッシュ図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/Black2_White2/Black2_White2.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 301
        offset = 1
        break
    case "central_kalos":
        area = "セントラルカロス図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/X_Y/X_Y.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 151
        offset = 0
        break
    case "coast_kalos":
      area = "コーストカロス図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/X_Y/X_Y.json')
      areaPokedex = areaPokedex_.default
      indexMin = -1
      indexMax = 153
      offset = 0
      break
    case "mountain_kalos":
      area = "マウンテンカロス図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/X_Y/X_Y.json')
      areaPokedex = areaPokedex_.default
      indexMin = -1
      indexMax = 151
      offset = 0
      break
    case "alola_sm":
      area = "アローラ図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/Sun_Moon/Sun_Moon.json')
      areaPokedex = areaPokedex_.default
      indexMin = -1
      indexMax = 302
      offset = 0
      break
    case "alola_usum":
      area = "アローラ図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/UltraSun_UltraMoon/UltraSun_UltraMoon.json')
      areaPokedex = areaPokedex_.default
      indexMin = -1
      indexMax = 403
      offset = 0
      break
    case "galar":
        area = "ガラル図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/Sword_Shield/Sword_Shield.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 400
        offset = 0
        break
    case "crown_tundra":
      area = "カンムリ雪原図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/Sword_Shield/Sword_Shield.json')
      areaPokedex = areaPokedex_.default
      indexMin = -1
      indexMax = 210
      offset = 0
      break
    case "isle_of_armor":
        area = "ヨロイ島図鑑"
        areaPokedex_ = await import('~/assets/pokedex/pokedex/Sword_Shield/Sword_Shield.json')
        areaPokedex = areaPokedex_.default
        indexMin = -1
        indexMax = 211
        offset = 0
        break
    case "hisui":
      area = "ヒスイ図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/LegendsArceus/LegendsArceus.json')
      areaPokedex = areaPokedex_.default
      indexMin = -1
      indexMax = 242
      offset = 0
      break
    case "paldea":
      area = "パルデア図鑑"
      areaPokedex_ = await import('~/assets/pokedex/pokedex/Scarlet_Violet/Scarlet_Violet.json')
      areaPokedex = areaPokedex_.default
      indexMin = -1
      indexMax = 400
      offset = 0
      break
    default:
      area = "global"
      break
  }

  let pokedex:{[key: string]: string}
  let detaile:{[key: string]: string}
  let status
  pokedex = {}

  let pokelist: any
  pokelist = []

  let result: any

  let description:{[key: string]: string}

  // console.log(`id:${id}`)
  // console.log(`area:${area_type}`)
  // console.log(`index:${index_type}`)

  if(area == "global"){
    switch (index_type){
      case "index":
        // console.log("global:index")
        for(var value in global["pokedex"]){
          pokedex = {}
          pokedex["no"] = String(global["pokedex"][value]["id"])
          pokedex["name"] = global["pokedex"][value]["name"]["jpn"]
          pokelist.push(pokedex)
        }

        result = pokelist
        break
      case "details":
        result = []
        var localNo

        pokedex = {}
        localNo = Number(id - 2)
        if(localNo == -1){
          result[0]=""
        }else{
          pokedex["no"] = String(id - 1)
          pokedex["name"] = global["pokedex"][localNo]["name"]["jpn"]
          pokedex["height"] = global["pokedex"][localNo]["height"]
          pokedex["weight"] = global["pokedex"][localNo]["weight"]
          pokedex["classification"] = global["pokedex"][localNo]["classification"]
          result[0]=pokedex
        }

        pokedex = {}
        localNo = Number(id - 1)

        pokedex["no"] = String(id)
        pokedex["name"] = global["pokedex"][localNo]["name"]["jpn"]
        pokedex["height"] = global["pokedex"][localNo]["height"]
        pokedex["weight"] = global["pokedex"][localNo]["weight"]
        pokedex["classification"] = global["pokedex"][localNo]["classification"]
        result[1]=pokedex

        pokedex = {}
        localNo = Number(id)
        if(localNo >= indexMax){
          result[2]=""
        }else{
          pokedex["no"] = String(id + 1)
          pokedex["name"] = global["pokedex"][localNo]["name"]["jpn"]
          pokedex["height"] = global["pokedex"][localNo]["height"]
          pokedex["weight"] = global["pokedex"][localNo]["weight"]
          pokedex["classification"] = global["pokedex"][localNo]["classification"]
          result[2]=pokedex
        }
        break
    }
  } else {
    switch (index_type){
      case "index":
        // console.log("mode:"+index_type)
        // console.log("area:"+area)
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
        var localNo
        
        pokedex = {}
        localNo = (Number(id )- 2) + Number(offset)
        if(localNo == indexMin || isNaN(localNo)){
          result[0]=""
        }else{
          pokedex["no"] = String(id - 1)
          pokedex["globalNo"] = areaPokedex["pokedex"][area][localNo]["globalNo"]
          pokedex["name"] = global["pokedex"][pokedex["globalNo"] - 1]["name"]["jpn"]
          pokedex["height"] = global["pokedex"][pokedex["globalNo"] - 1]["height"]
          pokedex["weight"] = global["pokedex"][pokedex["globalNo"] - 1]["weight"]
          pokedex["classification"] = global["pokedex"][pokedex["globalNo"] - 1]["classification"]
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
        status = []
        localNo = (Number(id) - 1) + Number(offset)
        pokedex["no"] = String(id)
        pokedex["globalNo"] = areaPokedex["pokedex"][area][localNo]["globalNo"]
        pokedex["name"] = global["pokedex"][pokedex["globalNo"] - 1]["name"]["jpn"]
        pokedex["height"] = global["pokedex"][pokedex["globalNo"] - 1]["height"]
        pokedex["weight"] = global["pokedex"][pokedex["globalNo"] - 1]["weight"]
        pokedex["classification"] = global["pokedex"][pokedex["globalNo"] - 1]["classification"]
        // pokedex["type1"] = areaPokedex["pokedex"][area][localNo]["status"][0]["type1"]
        // pokedex["type2"] = areaPokedex["pokedex"][area][localNo]["status"][0]["type2"]
        // pokedex["ability1"] = areaPokedex["pokedex"][area][localNo]["status"][0]["ability1"]
        // pokedex["ability2"] = areaPokedex["pokedex"][area][localNo]["status"][0]["ability2"]
        // pokedex["dream_ability"] = areaPokedex["pokedex"][area][localNo]["status"][0]["dream_ability"]
        // pokedex["hp"] = areaPokedex["pokedex"][area][localNo]["status"][0]["hp"]
        // pokedex["attack"] = areaPokedex["pokedex"][area][localNo]["status"][0]["attack"]
        // pokedex["defense"] = areaPokedex["pokedex"][area][localNo]["status"][0]["defense"]
        // pokedex["special_attack"] = areaPokedex["pokedex"][area][localNo]["status"][0]["special_attack"]
        // pokedex["special_defense"] = areaPokedex["pokedex"][area][localNo]["status"][0]["special_defense"]
        // pokedex["speed"] = areaPokedex["pokedex"][area][localNo]["status"][0]["speed"]

        var i:Number
        var j:number
        for(i=0;i<areaPokedex["pokedex"][area][localNo]["status"].length;i++){
          detaile = {}
          detaile["form"] = areaPokedex["pokedex"][area][localNo]["status"][i]["form"]

          detaile["type1"] = {"name": areaPokedex["pokedex"][area][localNo]["status"][i]["type1"], "effective": ""}
          detaile["type2"] = {"name": areaPokedex["pokedex"][area][localNo]["status"][i]["type2"], "effective": ""}

          detaile["ability1"] = areaPokedex["pokedex"][area][localNo]["status"][i]["ability1"]
          detaile["ability2"] = areaPokedex["pokedex"][area][localNo]["status"][i]["ability2"]
          detaile["dream_ability"] = areaPokedex["pokedex"][area][localNo]["status"][i]["dream_ability"]
          detaile["hp"] = areaPokedex["pokedex"][area][localNo]["status"][i]["hp"]
          detaile["attack"] = areaPokedex["pokedex"][area][localNo]["status"][i]["attack"]
          detaile["defense"] = areaPokedex["pokedex"][area][localNo]["status"][i]["defense"]
          detaile["special_attack"] = areaPokedex["pokedex"][area][localNo]["status"][i]["special_attack"]
          detaile["special_defense"] = areaPokedex["pokedex"][area][localNo]["status"][i]["special_defense"]
          detaile["speed"] = areaPokedex["pokedex"][area][localNo]["status"][i]["speed"]
          detaile["description"] = areaPokedex["pokedex"][area][localNo]["status"][i]["description"]

          // description = {}
          // for(j=0;j<areaPokedex["pokedex"][area][localNo]["status"][i]["description"].length;j++){

          // }

          status.push(detaile)
        }
        pokedex["status"] = status

        result[1]=pokedex

        pokedex = {}
        localNo = Number(id) + Number(offset)
        if(localNo >= indexMax){
          result[2]=""
        }else{
          pokedex["no"] = String(id + 1)
          pokedex["globalNo"] = areaPokedex["pokedex"][area][localNo]["globalNo"]
          pokedex["name"] = global["pokedex"][pokedex["globalNo"] - 1]["name"]["jpn"]
          pokedex["height"] = global["pokedex"][pokedex["globalNo"] - 1]["height"]
          pokedex["weight"] = global["pokedex"][pokedex["globalNo"] - 1]["weight"]
          pokedex["classification"] = global["pokedex"][pokedex["globalNo"] - 1]["classification"]
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
      case "exists":
        result = {check: false, localNo: 0}
        for(var value in areaPokedex["pokedex"][area]){
          if(areaPokedex["pokedex"][area][value]["globalNo"] == id ){
            result = {check: true, localNo: Number(value) + 1 - Number(offset)}
          }
        }
        break
    }
  }
  return {
    "result": query,
    "pokedex": result
  }
})
