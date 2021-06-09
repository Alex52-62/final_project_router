Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
            <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" placeholder="Search..." class="search-field" v-model="userSearch">
                <div class="search"></div>
            </form>
    `
});