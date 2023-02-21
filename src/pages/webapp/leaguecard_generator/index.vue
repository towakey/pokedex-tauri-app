<template>
  <!-- <v-container class="d-flex"> -->
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="6"
      >
        <v-card>
          <v-card-title>
            リーグカードジェネレーター
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-text-field
                  v-model="player_number"
                  label="背番号"
                />
              </v-row>
              <v-row>
                <v-text-field
                  v-model="player_name"
                  label="トレーナー名"
                />
              </v-row>
              <v-row>
                <v-text-field
                  v-model="input_passcode"
                  label="パスコード"
                />
              </v-row>
              <v-row>
                <v-textarea
                  outlined
                  v-model="input_contents"
                  label="自己紹介"
                />
              </v-row>
              <v-row>
                <v-color-picker
                  v-model="input_fontcolor"
                  dot-size="25"
                  swatches-max-height="100"
                  hide-inputs
                />
              </v-row>
              <v-row>
                <v-col>
                  <v-color-picker
                    v-model="input_color1"
                    dot-size="25"
                    swatches-max-height="100"
                    hide-inputs
                  />
                  </v-col>
                  <v-col>
                  <v-color-picker
                    v-model="input_color2"
                    dot-size="25"
                    swatches-max-height="100"
                    hide-inputs
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="6"
      >
        <v-card style="width: 768px">
          <v-card-text>
            <canvas
              id="cv_pc"
              width="768px"
              height="960px"
              class="responsive-img"
              style="{width: 100%; height: auto;}"
            ></canvas>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  <!-- </v-container> -->
</template>
<script lang="ts">

export default defineComponent({
  setup(){
    definePageMeta({
      title: "リーグカードジェネレーター",
    })

    const canvas = ref()
    const context = ref()

    const player_number: Ref<string> = useState('player_number', () => "")
    const player_name: Ref<string> = useState('player_name', () => "")
    const input_passcode: Ref<string> = useState('input_passcode', () => "")
    const input_fontcolor: Ref<string> = useState('input_fontcolor', () => "#FFFFFF")
    const input_color1: Ref<string> = useState('input_color1', () => "#FF0000")
    const input_color2: Ref<string> = useState('input_color2', () => "#FFFF00")
    const input_contents: Ref<string> = useState('input_contents', () => "")

    const w = "768"
    const h = "960"

    const signature = "Created by http://pokedex-online.jp/webapp/leaguecard_generator"

    onMounted(() => {
      canvas.value = document.querySelector('#cv_pc')
      context.value = canvas.value.getContext("2d")
      context.value.canvas.width = w
      context.value.canvas.height = h
      draw()
    })

    const draw = () => {
      // 背景色
      context.value.beginPath()
      context.value.fillStyle = input_color2.value
      context.value.fillRect(0, 0, w, h)

      // 斜線
      context.value.fillStyle = input_color1.value
      context.value.rotate(20 * Math.PI / 180)
      context.value.fillRect(210, -300, 690, Number(h) * 2)

      // 斜線を戻す
      context.value.rotate(-20 * Math.PI / 180)

      // 左端の黒線
      context.value.fillStyle = 'rgba(77, 77, 77)'
      context.value.fillRect(0, 0, 100, Number(h) * 2)

      // 背番号
      context.value.font = '120pt Arial'
      context.value.fillStyle = input_fontcolor.value
      context.value.fillText(player_number.value, 400, Number(h) - 50)

      // プレイヤー名
      context.value.font = '50pt Arial'
      context.value.fillStyle = input_fontcolor.value
      context.value.fillText(player_name.value, 10, Number(h) - 50)

      // パスコード
      if(input_passcode.value !== ""){
        var result = ""
        for(var i=0; i<input_passcode.value.length; i++){
          if((Number(i) % 4 >> 0) === 0 && Number(i) > 1){
            result+= "-" + input_passcode.value.substr(Number(i),1)
          }else{
            result+=input_passcode.value.substr(Number(i),1)
          }
        }
      } else {
        var result = ""
      }
      context.value.font = '20pt Arial'
      context.value.fillStyle = input_fontcolor.value
      context.value.fillText(result, 400, Number(h) - 240)

      var textlist = input_contents.value.split('\n')
      var x = 150
      var y = 200
      context.value.font = '20pt Arial'
      context.value.fillStyle = input_fontcolor.value
      var lineHeight = context.value.measureText("あ").width + 15
      for(var i=0; i < textlist.length; i++){
        context.value.fillText(textlist[i], x, y + lineHeight * i)
      }

      context.value.font = '10pt Arial'
      context.value.fillStyle = input_fontcolor.value
      context.value.fillText(signature, 20, Number(h) - 10)

      context.value.stroke()
      context.value.closePath()

    }

    watch(player_number, () => {
      console.log("player_number")
      draw()
    })
    watch(player_name, () => {
      console.log("player_name")
      draw()
    })
    watch(input_passcode, () => {
      console.log("input_passcode")
      draw()
    })
    watch(input_fontcolor, () => {
      console.log("input_fontcolor")
      draw()
    })
    watch(input_color1, () => {
      console.log("input_color1")
      draw()
    })
    watch(input_color2, () => {
      console.log("input_color2")
      draw()
    })
    watch(input_contents, () => {
      console.log("input_contents")
      draw()
    })

    return {
      player_number,
      player_name,
      input_passcode,
      input_fontcolor,
      input_color1,
      input_color2,
      input_contents,
      canvas,
      context,

      draw,
    }
  }
})
</script>
