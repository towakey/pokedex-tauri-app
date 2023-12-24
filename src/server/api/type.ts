export default defineEventHandler(async (event) => {
  const type_: any = await import('~/assets/pokedex/type/type.json')
  const types: any[] = type_.default.type
  var type: any[]

  let result: any
  // let resultList: {[key: string]: string}
  let resultList: any
  result = null
  resultList = null


  const query = getQuery(event)
  const game: string = String(query.game)
  const attackType: string = String(query.attackType)
  const defenceType1: string = String(query.defenceType1)
  const defenceType2: string = String(query.defenceType2)

  // console.log("バージョン："+game)
  // console.log("こうげき："+attackType)
  // console.log("タイプ１："+defenceType1)
  // console.log("タイプ２："+defenceType2)

  // const gameList: { [key: string]: string } = {
  //   "kanto": "Red_Green_Blue_Yellow",
  //   "johto": "Gold_Silver_Crystal",
  //   "hoenn": "Ruby_Sapphire_Emerald",
  //   "sinnoh": "Diamond_Pearl_Platinum",
  //   "unova_bw": "Black_White",
  //   "unova_b2w2": "Black2_White2",
  //   "central_kalos": "X_Y",
  //   "coast_kalos": "X_Y",
  //   "mountain_kalos": "X_Y",
  //   "alola_sm": "Sun_Moon",
  //   "alola_usum": "UltraSun_UltraMoon",
  //   "galar": "Sword_Shield",
  //   "isle_of_armor": "Sword_Shield",
  //   "crown_tundra": "Sword_Shield",
  //   "hisui": "LegendsArceus",
  //   "paldea": "Scarlet_Violet",
  // }
  
  let typeList: string[] = [
    "ノーマル",
    "ほのお",
    "みず",
    "でんき",
    "くさ",
    "こおり",
    "かくとう",
    "どく",
    "じめん",
    "ひこう",
    "エスパー",
    "むし",
    "いわ",
    "ゴースト",
    "ドラゴン",
  ]

  if( game == 'Gold_Silver_Crystal' || game == 'Ruby_Sapphire_Emerald' || game == 'Diamond_Pearl_Platinum' || game == 'Black_White' || game == 'Black2_White2' ){
    typeList.push('あく')
    typeList.push('はがね')
  }else if( game == 'X_Y' || game == 'Sun_Moon' || game == 'UltraSun_UltraMoon' || game == 'Sword_Shield' || game == 'LegendsArceus'  || game == 'Scarlet_Violet' ){
    typeList.push('あく')
    typeList.push('はがね')
    typeList.push('フェアリー')
  }



  result = {}
  type = []
  // resultList = {}
  if(attackType !== "list"){
    // result = null
    // resultList = {}
    // console.log("not list")
    for(const ver of types){
      if(ver['geme_version'].includes(game)){
        type=ver['type']
      }
    }
    // console.log(type)
    if(defenceType2 == ""){
      // console.log("defenceType2==null")
      result = String(Number(type[attackType][defenceType1]))
    }else{
      result = String(Number(type[attackType][defenceType1]) * Number(type[attackType][defenceType2]))
    }
  }else{
    // console.log("list")
    // resultList = {}
    // result = {"type": "test"}
    for(const ver of types){
      if(ver['geme_version'].includes(game)){
        type=ver['type']
      }
    }
    // console.log(type)
    for(let val in typeList)
    {
      // resultList[String(typeList[val])] = "0"
      if(defenceType2 == ""){
        result[String(typeList[val])] = String(Number(type[typeList[val]][defenceType1]))
      }else{
        result[String(typeList[val])] = String(Number(type[typeList[val]][defenceType1]) * Number(type[typeList[val]][defenceType2]))
      }
        // result[String(typeList[val])] = "0"
      // console.log(type[typeList[val]])
    }
  }
  return {
    "query": query,
    "type": result,
  }
})