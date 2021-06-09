<template>
    <div class="basketFull">
        <h2>Your Basket</h2>
        <table width="700" border="0" cellpadding="5" cellspacing="0">
            <tr bgcolor="#41581B">
                <p v-if="!cart.length">Корзина пуста</p>
                    <div class="fullBasket">
                        <cart-item class="cart-item"
                            v-for="item of cart"
                                :key="item.id_product"
                                :cart-item="item"
                                :img="item.img"
                                @remove="deleteFromCart">
                        </cart-item>
                    </div>
            </tr>
        </table>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'basket',
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
