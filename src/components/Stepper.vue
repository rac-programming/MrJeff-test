<template>
<div class="checkout-wrapper">
    <ol class="checkout">
        <li class="step" v-for="(step, stepIndex) in steps"
            :key="step.id"
            :class="{
              'prev': stepIndex < currentStep,
              'active': stepIndex === currentStep }"
            >
            <span class="step-dot" @click="$emit('newStep', stepIndex)">{{ stepIndex }}</span>
            <span :class="top ? 'step-label-top': 'step-label-bottom'">{{ step.name }}</span>
        </li>
    </ol>
</div>
</template>

<script>
export default {
  name: 'Stepper',

  props: {
    currentStep: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      required: true
    },
    top:{
      type:Boolean,
      default: false
    }
  },

  methods: {

  },

  data () {
    return {
      auxStep : this.currentStep
    }
  }
}
</script>

<style lang="scss">

$line-width: 6px;
$line-color: rgb(224, 102, 102);
$label-height: 2em;
$label-color-active: rgb(224, 102, 102);
$label-color-inactive: #99a4ac;

.checkout-wrapper {
  box-sizing: border-box;
  border: 1px solid #DDD;
  padding: 1rem;
  width: 100%;
}
.checkout {
  display: flex;
  margin: 2rem 0;
  padding-left: 0;
  padding-bottom: 2em;
  text-align: center;
  list-style: none;

  .step {
    cursor: default;
    flex: 1 1 100%;
    height: 20px;
    position: relative;
    z-index: 0;

    &:before, 
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      transform: translateY(-2px);
      border-bottom: $line-width solid #eee;
      z-index: -1;
    }

    &:before {
      left: 0;
      right: 50%;
    }

    &:after {
      left: 50%;
      right: 0;
    }

    &:first-child:before { left: 50%; }
    &:last-child:after { right: 50%; }
  }

  .step-dot {
    display: inline-block;
    background-color: #eee;
    color: #aaa;
    width: 4 * $line-width;
    height: 4 * $line-width;
    border: 2px solid #fff;
    border-radius: 8px;
    cursor: pointer;
  }

  .step.prev,
  .step.active {

    .step-dot {
      background-color: $line-color;
      color: #fff;
      cursor: pointer;
    }

    &:before {
      border-bottom-color: $line-color;
    }
  }

  .step.prev {

    &:after {
      border-bottom-color: $line-color;
    }
  }
  @media (max-width: 700px) {
  .step.active span{
    display: inline-block;
  }
  .step-label-bottom{
    display: none;
    font-size: 12px;
  }
  .step-label-top {
    display: none;
    font-size: 12px;
  }
}
  .step-label-bottom {
    position: absolute;
    bottom: -$label-height;
    left: 50%;
    transform: translateX(-50%);
    color: $label-color-inactive;
    font-weight: 600;
    white-space: nowrap;
    visibility: visible;
    cursor: pointer;
  }

    .step-label-top {
    position: absolute;
    bottom: $label-height;
    left: 50%;
    transform: translateX(-50%);
    color: $label-color-inactive;
    font-weight: 600;
    white-space: nowrap;
    visibility: visible;
    cursor: pointer;
  }

  .step.active .step-label {
    display: initial;
    color: $label-color-active;
    font-weight: bold;
    visibility: visible;
  }

  .step:not(.active) .step-label {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

button + button {
  margin-left: 1rem;
}  

</style>
