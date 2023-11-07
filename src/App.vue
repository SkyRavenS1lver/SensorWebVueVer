<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <body class="sb-nav-fixed">
    <Navbar/>
    <div id="layoutSidenav">
      <Sidebar/>
      <div id="layoutSidenav_content">
        <main>
        <RouterView v-if="$route.fullPath == '/'" :model="light" />
        <RouterView v-if="$route.fullPath == '/light'" :model="light" title="Light" subtitle="Light (lux)"/>
        <RouterView v-if="$route.fullPath == '/pressure'" :model="pressure" title="Pressure" subtitle="Pressure (Pa)"/>
        <RouterView v-if="$route.fullPath == '/humidity'" :model="lembapTanah" title="Percent Soil Moisture" subtitle="Percent (%)"/>
        <RouterView v-if="$route.fullPath == '/airQ'" :model="kualitas" title="Air Quality" subtitle="Air Quality (PPM)"/>
        <RouterView v-if="$route.fullPath == '/altitude'" :model="altitude" title="Approx Altitude" subtitle="Altitude (m)"/>
        <RouterView v-if="$route.fullPath == '/rain'" :model="curah" title="Rain drop" subtitle=""/>
        <RouterView v-if="$route.fullPath == '/airH'" :model="lembapUdara" title="Humidity" subtitle="Percent (%)"/>
        <RouterView v-if="$route.fullPath == '/temp1'" :model="temperature" title="Temperature 1" subtitle="Celcius (C)"/>
        <RouterView v-if="$route.fullPath == '/temp2'" :model="temperature2" title="Temperature 2" subtitle="Celcius (C)"/>
        </main>
      </div>
    </div>

  </body>
  

</template>
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
  export default {
  data() {
    return {
      light: [],
      altitude: [],
      curah: [],
      kualitas: [],
      lembapTanah: [],
      lembapUdara: [],
      pressure: [],
      temperature: [],
      temperature2: [],
      mode:"Dashboard"
    }
  },
  methods: {
    async getData(){
      const firebaseConfig = {
                apiKey: "AIzaSyC6WXLL3Sym3ENfPo9_YaIn5CoOCv4RFnc",
                authDomain: "sensor-web-da2ad.firebaseapp.com",
                databaseURL: "https://sensor-web-da2ad-default-rtdb.firebaseio.com",
                projectId: "sensor-web-da2ad",
                storageBucket: "sensor-web-da2ad.appspot.com",
                messagingSenderId: "789387599423",
                appId: "1:789387599423:web:92cad2149c61bc59c7e28a",
                measurementId: "G-7T48XYK51N"
            };
      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);
      const refs = ref(db, 'sensor1');
      console.log(window.location.pathname)

      onValue(refs, (snapshot) => {
        this.light = [['Waktu', 'Pencahayaan']];
        this.pressure = [['Waktu', 'Pressure']];
        this.lembapTanah = [['Waktu', 'Persentase Kelembapan Tanah']];
        this.kualitas = [['Waktu', 'Kualitas Udara']];
        this.altitude = [['Waktu', 'Approx Altitude']];
        this.curah = [['Waktu', 'Approx Altitude']];
        this.lembapUdara = [['Waktu', 'Kelembapan Udara']];
        this.temperature = [['Waktu', 'Temperatur 1']];
        this.temperature2 = [['Waktu', 'Temperatur 2']];
        snapshot.forEach(child=>{
          this.light.push([child.val().TimeStamp, parseFloat(child.val().Light)]);
          this.pressure.push([child.val().TimeStamp, parseFloat(child.val().Pressure)])  
          this.lembapTanah.push([child.val().TimeStamp, parseFloat(child.val().PersentaseKelembapanTanah)])
          this.kualitas.push([child.val().TimeStamp, parseFloat(child.val().AirQuality)])
          this.altitude.push([child.val().TimeStamp, parseFloat(child.val().ApproxAltitude)])
          this.curah.push([child.val().TimeStamp, parseFloat(child.val().RainDrop)])
          this.lembapUdara.push([child.val().TimeStamp, parseFloat(child.val().H)])
          this.temperature.push([child.val().TimeStamp, parseFloat(child.val().T)])
          this.temperature2.push([child.val().TimeStamp, parseFloat(child.val().Temperature)])
        });
      });
    }
  },
  created() {
    this.getData();
  },
}


</script>
