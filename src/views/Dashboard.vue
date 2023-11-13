<script setup>
import { GChart } from 'vue-google-charts'
defineProps({
  model: {
    type: Array,
    required: false,
    default:["Waktu"] 
  },
  title:{
    type:String,
    required:false,
    default:"Dashboard"
  },
  subtitle:{
    type:String,
    required:false,
    default:"Dashboard"
  },

})
</script>

<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">{{ title }}</h1>
        <hr />
        <center>
          <GChart style="width: 85rem; height: 50rem"
          :settings="{ packages: ['corechart'] }"
          type="LineChart"
          :data="model"
          :options="chartOptions"
          />
        </center>
    </div>
</template>

<script>
export default {
  data () {
    return {
      chartOptions: {
            curveType: 'function',
            legend: { position: 'bottom' },
            vAxis: { title: this.subtitle},
          hAxis: {
              title: 'Time'
          }
      }
    }
  }
}
</script>

