<template>
    <div class="w-100 main-text" style="font-family: 'Lato', sans-serif;background-color:white;min-height:544px;">
        <div class="d-flex" style="border-bottom:1px solid #C8CFCE;margin-bottom:2rem;">
            <p class="font-weight-bold pl-4 p-3">INFORMACIÓN DE TUS PEDIDOS</p>
        </div>
        <div class="d-flex pl-4 pr-4 ml-2 mr-2" v-for="(elem, index) in orders" :key="index">
            <div  class="row w-100 ml-0 align-items-center justify-content-start" style="border-bottom:1px solid #C8CFCE">
                <div class="col-sm-8 pb-4 pt-4 pl-2 pr-0 ">
                    <div class="d-flex align-items-center justify-content-sm-start justify-content-center">
                        <img v-if="elem.logistics.code=='PICKUP-DELIVERY'" class="mt-0 mr-3" src="@/assets/recogida.svg" style="border:none; height:40px; width:40px;">
                        <img v-else class="mt-0 mr-3" src="@/assets/recogida copy.svg" style="border:none; height:40px; width:40px;">
                        <div>
                            <p class="font-weight-bold mb-0 mt-0">Pedido nº {{elem.code}}</p>
                            <p class="mt-0 ml-0 small-text light-text">Fecha de pedido: {{elem.orderDate}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 pb-3 pb-sm-0">
                    <button class="mrjeff-btn m-2 float-sm-right" v-on:click="showOrderDetails(elem)" >VER PEDIDO</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'list-orders',
    props:{
        orders:{
            type:Array,
            required:true
        }
    },
    methods:{
        showOrderDetails(order){
            this.$router.push("./orders/" + order.id);
        }
    },
    data(){
        return {

        }
    }
}
</script>

