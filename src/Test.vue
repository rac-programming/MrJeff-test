<template>
  <div id="app" @keypress.left="prevStep"  @keypress.right="nextStep">
    <stepper :currentStep="currentStep" :steps="steps" @newStep="updateStep" :top="top"/>
    <div class="d-flex w-100 mt-1 justify-content-between">
      <div><button type="button" style="padding: 3px 10px;" class="mrjeff-btn" @click="top=!top">Cambiar texto</button></div>
      <div>
        <button  class="mrjeff-btn" style="padding: 2px 10px;" @click="prevStep"><span style="font-size:25px;">←</span></button>
        <button  class="mrjeff-btn ml-1" style="padding: 2px 10px;" @click="nextStep"><span style="font-size:25px;" >→</span></button>
      </div>
    </div>
    <div class="mt-3"><router-link class="mrjeff-outline-btn" to="/orders">Interfaces</router-link></div>
    <div class="mt-4">
      <step-one v-if="currentStep===0"/>
      <step-two v-else-if="currentStep===1"/>
      <step-three v-else-if="currentStep===2"/>
      <step-four v-else-if="currentStep===3"/>
      <step-five v-else/>
    </div>
  </div>
</template>
<script>

import Stepper from '@/components/Stepper'
import StepOne from '@/components/StepOne'
import StepTwo from '@/components/StepTwo'
import StepThree from '@/components/StepThree'
import StepFour from '@/components/StepFour'
import StepFive from '@/components/StepFive'

export default {
  name: 'app',

  components: {
    Stepper,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive
  },
  created:function(){
    for(var i in this.steps){
      this.stepKeys.push(i);
    }
  },
  mounted: function(){
    var a = this;

     window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowRight') {
        a.nextStep();
      }else if(e.key == 'ArrowLeft'){
        a.prevStep();
      }else if(e.key in a.stepKeys){
        a.currentStep=parseInt(e.key);
      }
    });
    
  },
  methods:{
    nextStep: function(){
      if(this.currentStep<this.steps.length-1){
        this.currentStep++;
      }
    },
    prevStep: function(){
      if(this.currentStep>0){
        this.currentStep--;
      }
    },
    updateStep:function(value){
      this.currentStep = value;
    },
    pushRoute:function(route){
      this.$router.push(route);
    }
  },

  data () {
    return {
      currentStep:0,
      steps: [
        { name: 'Components', },
        { name: 'CSS styles', },
        { name: 'API request', },
        { name: 'New feature', },
        { name: 'Tests', },
      ],
      top:false,
      info:null,
      stepKeys:[]
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;
  padding: 1rem;
}

.step {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
}
.links {
  margin-bottom: 2rem;
  margin-top: 1rem;
}
hr {
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

p {
  width: 100%;
  text-align: left;
  margin: .5rem 0;
}
img {
  width: 100%;
  border: 1px solid black;
  margin-top: 1rem;
}
.code {
  text-align: left;
  font-family: monospace;
  background-color: rgb(225, 225, 225);
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem auto;
  width: fit-content;
}
.doc-box {
  border: 1px solid #DDD;
  padding: 1rem;
  background-color: #EFEFEF;
  margin: 2rem 0;
}
.exercise {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #DDD;

  ul, ol {
    margin: .5em 0;
    text-align: left;
  }
}

.exercise-solution {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.info {
  margin-top: 1rem;
  border: 1px solid #DDD;
  padding: 0.5rem 1rem;
  background-color: #EFEFEF;
}

.primary-text{
  color:#202945 !important;
}
.secondary-text{
  color:#2A375C !important;
}
.light-text{
  color:#76777A !important;
}
.small-text{
  font-size: 14px !important;

}
.alert-text{
  color:#FF6666;
}
.mrjeff-btn{
  color: #FFFFFF;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  background-color: #84DADE;
  border-radius: 5px;
  padding: 12px 27px;
  border: none !important;
  
}

.mrjeff-btn:hover{
  background-color: rgb(66, 153, 158);
  color:white;
  text-decoration: none;
}

.mrjeff-outline-btn{
  color: black;
  border: 1px solid #202945;
  border-radius: 5px;
  font-size: 14px;
  padding: 9px 27px;
  background-color: transparent;
    
}


.mrjeff-outline-btn:hover{
  border: 1px solid rgb(0, 170, 179);
  color:rgb(0, 170, 179);
  text-decoration: none;
}

</style>
