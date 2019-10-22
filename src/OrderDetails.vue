<template>

    <div  id="orders" class="container d-flex align-items-center" style="background-color:white;max-width:800px;background-color:#F6F6F7; height:100vh">
      <div class="w-100 align-self-center">
        <div class="w-100 main-text pb-4 " style="font-family: 'Lato', sans-serif;background-color:white;min-height:544px;">
            <div class="d-flex" style="border-bottom:1px solid #C8CFCE;margin-bottom:2rem;">
                <p class="font-weight-bold pl-4 p-3">INFORMACIÓN DE TUS PEDIDOS</p>
            </div>
            <div class="d-flex justify-content-center" v-if="order!=undefined">
                <div class="col-6-sm mr-2 ml-2">
                    <p class="font-weight-bold mb-0">Datos del pedido nº {{order.code}}</p>
                    <p class="small-text light-text mt-0">Fecha del pedido {{order.orderDate}}</p>
                    <div style="border-radius:5px;border: 1px solid #C8CFCE">
                       <div style="border-bottom: 1px solid #C8CFCE"><p class="font-weight-bold secondary-text pl-4 pr-4 p-1">Productos</p></div>
                       <div style="border-bottom: 1px solid #C8CFCE" >
                           <div class="pt-2 pb-2 pl-4 pr-4 small-text light-text">
                                <div v-for="(elem, index) in products" :key="index">
                                    <div  v-if="elem.product.source.code=='ORDER'" class="d-flex justify-content-between mt-1 mb-1 ">
                                    <span>{{elem.quantity + ' '+elem.product.name}}</span>
                                    <span>{{((elem.product.price*elem.quantity)/100).toFixed(2)}}€</span>
                                    </div>                                
                                </div>
                                <div v-if="coupon!=undefined" class="d-flex justify-content-between mt-1 mb-1 alert-text">
                                    <span>{{coupon.name}}</span>
                                    <span>-{{((coupon.discount)/100).toFixed(2)}}€</span>
                                </div>
                                <div class="d-flex justify-content-between mt-1 mb-1 ">
                                    <span>Recogida/Entrega</span>
                                    <span>{{((order.totalDeliveryPrice)/100).toFixed(2)}}€</span>
                                </div>
                           </div>
                       </div>
                       <div class="pl-4 pr-4 pt-1 pb-2" style="border-bottom: 1px solid #C8CFCE">
                          <p class="font-weight-bold secondary-text mb-0">PRODUCTOS AÑADIDOS</p>
                          <div v-for="(elem, index) in products" :key="index">
                            <div  v-if="elem.product.source.code=='PROVIDER'" class="d-flex justify-content-between small-text light-text pt-1">
                              <span>{{elem.quantity + ' '+elem.product.name}}</span>
                              <span>{{((elem.product.price*elem.quantity)/100).toFixed(2)}}€</span>
                            </div>                                
                          </div>
                       </div>
                       <div class="d-flex justify-content-between pl-4 pr-4 pt-2 pb-2 primary-text small-text font-weight-bold">
                           <span>Total</span>
                           <span>{{(order.totalPrice/100).toFixed(2)}}€</span>
                       </div>
                    </div>
                    <button id='timetable-btn' class="mrjeff-btn w-100 mt-4"  @click="dialogVisitVisible = true">CAMBIAR HORA RECOGIDA Y ENTREGA</button>
                    <button id='back-btn' class="mrjeff-outline-btn" style="margin-top:2rem" @click="$router.push('/orders')">← VOLVER</button>
                </div>    
            </div>
        </div>
      </div>

    <time-table  v-if="order!=undefined" :order='order' :visibility='dialogVisitVisible' @close-dialog='handleClose' :key="componentKey"/>
  </div>
</template>

<script>
import TimeTable from '@/components/TimeTable'

export default {
  name: 'orders',

  components: {
    TimeTable
  },
  mounted: function(){

  },
  methods:{
    handleClose(){
      this.dialogVisitVisible=false; 
      this.componentKey++;
    }
  },
  computed: {
    // Obtencion de los diferentes valores del pedido mediante parametros de ruta y store
    order() {
      return this.$store.getters.ORDER(this.$route.params.orderId);
    },
    products(){
      if(this.order!=undefined){
        return this.$store.getters.PRODUCTS(this.order);
      }

    },
    coupon(){
      if(this.order.couponId != null){
        return this.$store.getters.COUPON(this.order.couponId);
      }
      return undefined;
    },

  },
  data () {
    return {
      dialogVisitVisible:false,
      configuration:[],
      deliveryAvailability:[],
      pickupAvailability:[],
      timePicker:0,
      componentKey:0,
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

.mrjeff-btn-selector span{
  cursor:pointer;
  border-radius: 20px;
  padding: 5px 10px;
}

.mrjeff-btn-selector .active {
  color: #FFFFFF;
  background-color: rgb(27, 27, 128);
}



</style>

