import { useStorage } from '@vueuse/core'

export const localStorageAreaListGet = ({area, pokedate}) => {
  console.log("localStorageAreaListGet")
  let defval: {[key: string]: string} = {}
  for(let val in pokedate){
    defval[String(Number(val)+1)]="0"
  }
  const result = useStorage(area, defval, undefined, {
    serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v),
    }    
  })
  return result
}