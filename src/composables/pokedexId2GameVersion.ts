export const pokedexId2GameVersion = (no: number) => {
  var result = ""
  if(1 <= no && no <=151){
    result = "赤 緑"
  }else if(152 <= no && no <=251){
    result = "金 銀"
  }else if(252 <= no && no <=386){
    result = "ルビー サファイア"
  }else if(387 <= no && no <=493){
    result = "ダイアモンド パール"
  }else if(494 <= no && no <=649){
    result = "ブラック ホワイト"
  }else if(650 <= no && no <=721){
    result = "X Y"
  }else if(722 <= no && no <=809){
    result = "サン ムーン"
  }else if(810 <= no && no <=898){
    result = "ソード シールド"
  }else if(899 <= no && no <=905){
    result = "Legends アルセウス"
  }else if(906 <= no && no <=1008){
    result = "スカーレット バイオレット"
  }
 return result
}