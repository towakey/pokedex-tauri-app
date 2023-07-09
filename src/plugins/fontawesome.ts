import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faTwitch, faGithubSquare, faMastodon } from '@fortawesome/free-brands-svg-icons'


export default defineNuxtPlugin((nuxtApp) => {
  config.autoAddCss = false
  library.add(fas, fab)

  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})