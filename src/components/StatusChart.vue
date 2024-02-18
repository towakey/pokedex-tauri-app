<template>
  <v-card
  elevation="0"
  >
    <v-card-text>
      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
ChartJS.register(ChartDataLabels)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    statusData: Object,
  },
  data() {
    return {
      // chartData: {
      //   labels: [ 'HP', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ' ],
      //   datasets: [ { data: [76, 110, 70, 81, 70, 123] } ]
      // },
      chartData: {},
      chartOptions: {
        responsive: true,
        title: {
          // display: true,
          // text: "pokemon",
          // position: "bottom",
        },
        indexAxis: 'y',
        scales: {
          x: {
            max: 260,
          }
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              color: 'rgb(255, 99, 132)',
            }
          },
          tooltip: {
            enabled: false,
          },
        },
      },
      hp: null,
    }
  },
  created() {
    this.hp = this.statusData
    this.chartData= {
      labels: [ 'HP', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ' ],
      datasets: [ { data: [this.statusData.hp, this.statusData.attack, this.statusData.defense, this.statusData.special_attack, this.statusData.special_defense, this.statusData.speed] } ],
    }
  }
}
</script>