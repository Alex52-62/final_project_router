<template>
                <div class="basket">
                    <basket ref="basket"></basket>
                </div>
</template>

<script>
// @ is an alias to /src
// @ is an alias to /src

import { mapGetters } from 'vuex';
import basket from '@/components/basket.vue';

export default {
  name: 'Basket',
  components: {
    basket,
  },
  compured: {
    ...mapGetters([
      'cart',
    ]),
  },
};
</script>
