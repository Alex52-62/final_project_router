<template>
        <div class="cart-wrapper">
            <button class="btn-cart" type="button" @click="showCart = !showCart">Basket</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cart.length">Корзина пуста</p>
                <cart-item class="cart-item"
                v-for="item of cart"
                :key="item.id_product"
                :cartItem="item"
                :img="item.img"
                @remove="deleteFromCart">
                </cart-item>
            </div>
        </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'cart',
  props: ['item'],
  components: { CartItem },
  data() {
    return {
      cartItems: [],
      showCart: false,
    };
  },
  computed: {
    ...mapGetters(['cart']),
  },
  methods: {
    ...mapActions({ deleteFromCart: 'deleteFromCart' }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
