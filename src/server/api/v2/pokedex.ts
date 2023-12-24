export default defineEventHandler(async (event) => {
  const global: any = (await import('~/assets/pokedex/v2/pokedex/pokedex.json')).default.pokedex
  const ability: any = (await import('~/assets/pokedex/v2/ability/ability.json')).default.ability

  const query = getQuery(event)
  const id: number = Number(query.id)
  const area_type: string = String(query.area)    
  const index_type: string = String(query.type)

  var area: string
  var ver: string
  var pokedex: any

  var result: any
  
  switch (area_type){
    case "global":
      area = "global"
      break
    case "kanto":
      area = "カントー図鑑"
      ver = "Red_Green_Blue_Yellow"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Red_Green_Blue_Yellow/Red_Green_Blue_Yellow.json')).default.pokedex
      break
    case "johto":
      area = "ジョウト図鑑"
      ver = "Gold_Silver_Crystal"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Gold_Silver_Crystal/Gold_Silver_Crystal.json')).default.pokedex
      break
    case "hoenn":
      area = "ホウエン図鑑"
      ver = "Ruby_Sapphire_Emerald"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Ruby_Sapphire_Emerald/Ruby_Sapphire_Emerald.json')).default.pokedex
      break
    case "sinnoh":
      area = "シンオウ図鑑"
      ver = "Diamond_Pearl_Platinum"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Diamond_Pearl_Platinum/Diamond_Pearl_Platinum.json')).default.pokedex
      break
    case "unova_bw":
      area = "イッシュ図鑑"
      ver = "Black_White"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Black_White/Black_White.json')).default.pokedex
      break
    case "unova_b2w2":
      area = "イッシュ図鑑"
      ver = "Black2_White2"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Black2_White2/Black2_White2.json')).default.pokedex
      break
    case "central_kalos":
      area = "セントラルカロス図鑑"
      ver = "X_Y"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/X_Y/X_Y.json')).default.pokedex
      break
    case "coast_kalos":
      area = "コーストカロス図鑑"
      ver = "X_Y"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/X_Y/X_Y.json')).default.pokedex
      break
    case "mountain_kalos":
      area = "マウンテンカロス図鑑"
      ver = "X_Y"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/X_Y/X_Y.json')).default.pokedex
      break
    case "alola_sm":
      area = "アローラ図鑑"
      ver = "Sun_Moon"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Sun_Moon/Sun_Moon.json')).default.pokedex
      break
    case "alola_usum":
      area = "アローラ図鑑"
      ver = "UltraSun_UltraMoon"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/UltraSun_UltraMoon/UltraSun_UltraMoon.json')).default.pokedex
      break
    case "galar":
      area = "ガラル図鑑"
      ver = "Sword_Shield"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Sword_Shield/Sword_Shield.json')).default.pokedex
      break
    case "crown_tundra":
      area = "カンムリ雪原図鑑"
      ver = "Sword_Shield"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Sword_Shield/Sword_Shield.json')).default.pokedex
      break
    case "isle_of_armor":
      area = "ヨロイ島図鑑"
      ver = "Sword_Shield"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Sword_Shield/Sword_Shield.json')).default.pokedex
      break
    case "hisui":
      area = "ヒスイ図鑑"
      ver = "LegendsArceus"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/LegendsArceus/LegendsArceus.json')).default.pokedex
      break
    case "paldea":
      area = "パルデア図鑑"
      ver = "Scarlet_Violet"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Scarlet_Violet/Scarlet_Violet.json')).default.pokedex
      break
    case "kitakami":
      area = "キタカミ図鑑"
      ver = "Scarlet_Violet"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Scarlet_Violet/Scarlet_Violet.json')).default.pokedex
      break
    case "blueberry":
      area = "ブルーベリー図鑑"
      ver = "Scarlet_Violet"
      pokedex = (await import('~/assets/pokedex/v2/pokedex/Scarlet_Violet/Scarlet_Violet.json')).default.pokedex
      break
    default:
      area = "global"
    break
  }

  var no: number
  var globalNo: number

  if(index_type == 'index'){
    result = []
    if(area == 'global'){
      for(var val in global){
        global[val]["no"] = global[val].id
        result.push(global[val])
      }
    }else{
      for(var val in pokedex[area]){
        if(pokedex[area][val].globalNo!=""){
          pokedex[area][val]["name"] = global[Number(pokedex[area][val].globalNo)-1].name
          result.push(pokedex[area][val])
        }
      }
    }
  }else if(index_type == 'details'){
    result = {}
    var flag: boolean 
    flag = true
    no = id
    if(area == 'global'){
      if(no < 1) flag = false
      if(no > (global.length)) flag = false
      if(flag){
        result["result"] = true
        result["no"] = global[no - 1].id
        result["globalNo"] = global[no - 1].id
        result["name"] = global[no - 1].name
        result["classification"] = global[no - 1][""][0].classification
        result["height"] = global[no - 1][""][0].height
        result["weight"] = global[no - 1][""][0].weight
      }
    }else{
      // BlackWhite(2)では図鑑番号は0から始まる
      if(area_type == 'unova_bw' || area_type == 'unova_b2w2'){
        if(no < 0) flag = false
        if(no > (pokedex[area].filter(item => item.no !== "").length - 1)) flag = false
      }else{
        no = no - 1
        if(no < 0) flag = false
        if(no > (pokedex[area].filter(item => item.no !== "").length - 1)) flag = false
      }
      if(flag){
        result["result"] = true
        result["no"] = pokedex[area][no].no
        result["globalNo"] = pokedex[area][no].globalNo
        globalNo = pokedex[area][no].globalNo - 1

        result["name"] = global[globalNo].name
        result["classification"] = global[globalNo][""][0].classification
        result["form"] = global[globalNo][""][0].form
        result["height"] = global[globalNo][""][0].height
        result["weight"] = global[globalNo][""][0].weight
        result["status"] = pokedex[area][no].status
        result["status"].forEach((element, index, status) => {
          // console.log(element)
          // console.log(index)
          // console.log(status[index].form)
          // ステータス内に分類と高さ重さを追加する
          // global[globalNo][""].forEach((element, index, form) => {
          //   console.log(form[index].form)
          //   if(form[index].form === status[index].form){
          //     status[index]["classification"] = form[index].classification
          //     status[index]["height"] = form[index].height
          //     status[index]["weight"] = form[index].weight
          //   }
          // })
          // global[globalNo]["mega_evolution"].forEach((element, index, form) => {
          //   console.log(form[index].form)
          //   if(form[index].form === status[index].form){
          //     status[index]["classification"] = form[index].classification
          //     status[index]["height"] = form[index].height
          //     status[index]["weight"] = form[index].weight
          //   }
          // })
          // status[index]["height"] = global[globalNo][status[index].form].height
          // status[index]["weight"] = global[globalNo][status[index].form].weight
          if(status[index]["ability1"]!=""){
            status[index]["ability1_description"] = ability[status[index]["ability1"]][ver]
          }else{
            status[index]["ability1_description"] = ""
          }
          if(status[index]["ability2"]!=""){
            status[index]["ability2_description"] = ability[status[index]["ability2"]][ver]
          }else{
            status[index]["ability2_description"] = ""
          }
          if(status[index]["dream_ability"]!=""){
            status[index]["dream_ability_description"] = ability[status[index]["dream_ability"]][ver]
          }else{
            status[index]["dream_ability_description"] = ""
          }
        });
      }else{
        result["result"] = false
      }
    }
  }else if(index_type == 'exists'){
    result = {
      check: false,
      no: 0
    }
    for(var val in pokedex[area]){
      if(pokedex[area][val].globalNo == id){
        result = {
          check: true,
          no: pokedex[area][val].no
        }
      }
    }
  }
  return {
    "query": query,
    "pokedex": result,
  }
})
