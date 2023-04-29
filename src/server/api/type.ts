export default defineEventHandler(async (event) => {
  const type_: any = await import('~/assets/pokedex/type/type.json')
  const types: any[] = type_.default.type
  var type: any[]

  const query = getQuery(event)
  const game: string = String(query.game)
  const attackType: string = String(query.attackType)
  const defenceType1: string = String(query.defenceType1)
  const defenceType2: string = String(query.defenceType2)

  // console.log("バージョン："+game)
  // console.log("こうげき："+attackType)
  // console.log("タイプ１："+defenceType1)
  // console.log("タイプ２："+defenceType2)
  for(const ver of types){
    if(ver['geme_version'].includes(game)){
      type=ver['type']
    }
  }
  // console.log(type)
  let result = null
  if(defenceType2 == ""){
    // console.log("defenceType2==null")
    result = String(Number(type[attackType][defenceType1]))
  }else{
    result = String(Number(type[attackType][defenceType1]) * Number(type[attackType][defenceType2]))
  }
  // console.log("result："+result)
  return {
    "result": "type",
    "type": result,
  }
})