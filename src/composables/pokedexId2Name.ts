export const pokedexId2Name = (type: string) => {
  var result = ""
  switch(type) {
    case "global":
      result = "全国図鑑"
      break
    case "kanto":
      result = "カントー図鑑"
      break
      case "johto":
      result = "ジョウト図鑑"
      break
      case "hoenn":
      result = "ホウエン図鑑"
      break
      case "sinnoh":
      result = "シンオウ図鑑"
      break
      case "unova_bw":
      result = "イッシュ図鑑(Black White)"
      break
      case "unova_b2w2":
      result = "イッシュ図鑑(Black2 White2)"
      break
      case "central_kalos":
      result = "セントラルカロス図鑑"
      break
      case "coast_kalos":
      result = "コーストカロス図鑑"
      break
      case "mountain_kalos":
      result = "マウンテンカロス図鑑"
      break
      case "alola_sm":
      result = "アローラ図鑑(Sun Moon)"
      break
      case "alola_usum":
      result = "アローラ図鑑(UltraSun UltraMoon)"
      break
      case "galar":
      result = "ガラル図鑑"
      break
      case "crown_tundra":
      result = "カンムリ雪原図鑑"
      break
      case "isle_of_armor":
      result = "ヨロイ島図鑑"
      break
      case "hisui":
      result = "ヒスイ図鑑"
      break
      case "paldea":
      result = "パルデア図鑑"
      break
  }
  return result
}