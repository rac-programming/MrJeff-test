<template>
  <div class="w-100 d-flex" id="orders" style="height:100vh">
    <div class="container align-self-center col-lg-8">
      <list-orders v-if="orders!=null" :orders="orders" />
    </div>
  </div>
</template>
<script>

import ListOrders from '@/components/ListOrders'
import ResourceRepository from '@/server/ResourceRepository'

export default {
  name: 'orders',

  components: {
    ListOrders
  },
  mounted: function(){
    // Almaceno los datos de la petición en la store
    this.$store.dispatch('GET_DATA');
  },
  methods:{

  },
  computed:{
     // Obtencion de pedidos mediante store
    orders() {return this.$store.getters.ORDERS} 
  },

  data () {
    return {
      isLoading:false,
      info:null
    }
  }
}
</script>

<style lang="scss">
html{
  background-color:#F6F6F7;
}
#app {
  padding: 0rem;
  background-color:#F6F6F7;

}

</style>
