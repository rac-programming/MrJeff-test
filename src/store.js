import Vue from 'vue'
import Vuex from 'vuex'
import ResourceRepository from '@/server/ResourceRepository'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:null
  },
  getters:{
    ORDERS: state => {
      if(state.data!=null)return state.data.orders._embedded.orders;
      return null
    },
    ORDER: (state)=> (id) =>{
      if(state.data !=null){
        for(let order of state.data.orders._embedded.orders){
          if (order.id == id){
            return order;
          }
        }
      }
    },
    PRODUCTS: (state)=> (order) =>{
      let result = []; 
      if(order !=null && state.data!=null){
        for(let product of order.productsOrder){
          for(let elem of state.data.products._embedded.products){
            if(product.productId == elem.id){
              result.push(
                {quantity:product.quantity,
                  product:elem
                }); 
                break
            }
          }
        }
      return result;
      }
    },
    COUPON: (state)=> (couponId) =>{
      if(state.data!=null && couponId !=null && state.data.coupons._embedded!=undefined){
        for(let coupon of state.data.coupons._embedded.coupons){
          if(coupon.id == couponId){
            return coupon
          }
        }
      }
    }
  },
  mutations: {
    SET_DATA: (state, payload) =>{
      state.data = payload;
    },
    SET_ORDER_VISITS: (state, payload) =>{
      if (state.data != null) {
        for (let order of state.data.orders._embedded.orders) {
          if (order.id == payload.order) {
            order.visits = payload.visits;
          }
        }
      }
    }
  },
  actions: {
    // Petición mediante axios 
    GET_DATA : async (context) =>{
      const {data} = await ResourceRepository.get('findByCustomerId');
      context.commit('SET_DATA',data);
    }
  }
})
