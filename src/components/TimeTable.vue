<template>
<div >
  <el-dialog custom-class="container w-100" :visible="visibility" style="font-family: 'Lato', sans-serif;" @close='close'>
    <div id="timetable-dialog" slot="title" class="primary-text font-weight-bold mt-4" style="border-bottom:1px solid #C8CFCE;margin-bottom:2rem;">
      HORA DE RECOGIDA/ENTREGA
    </div>
    <div >
      <div class="d-flex mrjeff-btn-selector justify-content-center justify-items-center" >
          <span id='pickup' class="mr-3 align-self-center" :class="timePicker==0? 'active':''" @click="timePicker=0">RECOGIDA</span>
          <span id='delivery' class="align-self-center" :class="timePicker==1? 'active':''" @click="timePicker=1">ENTREGA</span>
      </div>
      <div style=" overflow-x: auto;" >
        <div class="d-flex justify-content-center w-100 mt-4" v-if='timePicker==0'  style="min-width:800px;">
          <ul  class="list-unstyled p-2" v-for='(day, index) in pickupAvailability' :key="index"> 
            <li class="primary-text font-weight-bold pt-1 pb-1">{{day.dayOfWeek}}</li>
            <li class="time-table" v-for="(elem, j) in day.defaultTimetableTimeSlotConfigurations" @click="pickupTime = elem" :key='j' :class="pickupTime.date==elem.date && elem.timeSlotStart==pickupTime.timeSlotStart? 'active':''">
              {{elem.timeSlotCode}}
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center w-100 mt-4" v-else style="min-width:800px;">
        <ul  class="list-unstyled p-2" v-for='(day, index) in deliveryAvailability' :key="index"> 
          <li class="primary-text font-weight-bold pt-1 pb-1">{{day.dayOfWeek}}</li>
          <li class="time-table" v-for="(elem, j) in day.defaultTimetableTimeSlotConfigurations" @click="deliveryTime = elem" :key='j' :class="deliveryTime.date==elem.date && elem.timeSlotStart==deliveryTime.timeSlotStart? 'active':''">
            {{elem.timeSlotCode}}
          </li>
        </ul>
      </div>
      </div>
    </div>
    <div slot="footer" class="d-flex justify-content-center">
      <el-button id='cancel' @click="close" type='danger'>CANCELAR</el-button>
      <button id='update' class="mrjeff-btn" @click="updateVisit">ACEPTAR</button>
    </div>
    </el-dialog>
</div> 
</template>

<script>
import {configuration} from '@/assets/timetables'

export default {
  name: 'TimeTable',

  props: {
    order: {
      type: Object,
      required: true
    },
    visibility:{
      type:Boolean,
      required:true,
    }
  },
  mounted: function () {
    // Obtención de horarios mediante el fichero assets/timetable.js
    this.configuration = configuration;
    var delivery = [];
    var pickup = [];
    var daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    let curr = new Date 
    let week = {}

    //Assigno fecha de la semana actual a los diferentes días del fichero configuration
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i 
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      week[daysOfWeek[i-1]]=day;
    }

    for(let i in this.configuration){
      if(this.configuration[i].timetableType=='OPENING'){ //Filtro los días de la semana de tipo OPENING, mismo tipo que los recibidos en el order
        let auxDel={};
        let auxPic={};
        Object.assign(auxDel, this.configuration[i]);
        Object.assign(auxPic, this.configuration[i]);
        auxDel.defaultTimetableTimeSlotConfigurations=[];
        auxPic.defaultTimetableTimeSlotConfigurations=[];
        for(let j of this.configuration[i].defaultTimetableTimeSlotConfigurations){
          //Filtro los horarios dependiendo de si son de recogida o entrega para obtener los horarios disponibles de recogida y entrega
          if(j.visitTypeCode=='DELIVERY'){ 
            j.date = week[this.configuration[i].dayOfWeek];
            auxDel.defaultTimetableTimeSlotConfigurations.push(j);
          }else{
            j.date = week[this.configuration[i].dayOfWeek];
            auxPic.defaultTimetableTimeSlotConfigurations.push(j);
          }
        }
        auxDel.defaultTimetableTimeSlotConfigurations.sort((a,b)=>{
          //Ordeno entregas por hora ascendente
          return parseInt(a.timeSlotStart.substring(0,2))-parseInt(b.timeSlotStart.substring(0,2));
        });
        auxPic.defaultTimetableTimeSlotConfigurations.sort((a,b)=>{
           //Ordeno recogidas por hora ascendente
          return parseInt(a.timeSlotStart.substring(0,2))-parseInt(b.timeSlotStart.substring(0,2));
        }); 
        // Añado el dia al vector auxiliar obteniendo su indice segun el día de la semana para tener la semana ordenada
        delivery[daysOfWeek.indexOf(this.configuration[i].dayOfWeek)]=auxDel;
        pickup[daysOfWeek.indexOf(this.configuration[i].dayOfWeek)]=auxPic;
      }
    }
    this.deliveryAvailability = delivery;
    this.pickupAvailability = pickup;
  },
  created: function () {
    this.pickupTime = this.order.visits[0];
    this.deliveryTime = this.order.visits[1]; 
  },

  methods: {
    close(){
      this.$emit('close-dialog');
    },
    updateVisit(){
      this.$emit('close-dialog');
      this.$store.commit('SET_ORDER_VISITS', {order:this.order.id,  visits:[this.pickupTime, this.deliveryTime]}); // Al aceptar guardo el valor en la store
    }
  },

  computed:{
  },

  data () {
    return {
      deliveryAvailability:[],
      pickupAvailability:[],
      pickupTime:null,
      deliveryTime:null,
      timePicker:0,
      configuration:null,
    }
  }
}
</script>
<style lang="scss" scoped>

 .time-table{
    cursor: pointer;
    padding: 3px 10px;
 }
 .time-table:hover {
    cursor: pointer;
    background-color:rgb(27, 27, 128);
    color:white;
    border-radius: 20px; 
 }

 .active{
    background-color:rgb(27, 27, 128);
    color:white;
    border-radius: 20px; 
 }

 .mrjeff-dialog{
   width: 75%;
 }

 @media (max-width: 600px){
   .mrjeff-dialog{
     width: 95% !important;
   }
   
 }
</style>