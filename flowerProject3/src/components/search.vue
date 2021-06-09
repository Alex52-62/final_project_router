<template>
            <form action="#"
            class="search-form"
            @submit.prevent="SEARCH(userSearch)">
                <input type="text"
                placeholder="Search..."
                class="search-field"
                v-model="userSearch">
                <div class="search"></div>
            </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'search',
  props: ['filter'],
  data() {
    return {
      userSearch: '',
    };
  },
  computed: {
    ...mapGetters([

    ]),
  },
  methods: {
    ...mapMutations(['SEARCH']),
    ...mapActions([
      'get_userSearch',
    ]),
    search(value) {
      this.get_userSearch(value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
