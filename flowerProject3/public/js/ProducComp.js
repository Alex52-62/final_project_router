Vue.component('products', {
    data() {
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <product ref="refref" v-for="item of filtered" :key="item.id_product" :product="item"></product>
        </div>
    `
});



Vue.component('product', {
    props: ['product'],
    data() {
        return {
            /**
             * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
             * то мы легко можем получить доступ к ним используя свойство $root.
             * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
             */
            cartAPI: this.$root.$refs.cart,
            isInfoPopupVisible: false,
        };
    },
    methods: {

    },

    template: `
    <div class="product-item">
        <v-popup 
        inPopupBuy="add to basket" 
        :popupTitle="product.product_name"
        v-on:closePopup="isInfoPopupVisible = !isInfoPopupVisible" 
        @PopupBuy="cartAPI.addProduct(product)"
        v-show="isInfoPopupVisible">
        <div>
        <img :src="product.img" alt="Some img">
        <h3>{{product.product_name}}</h3>
        <p>{{product.price}}USD</p>
        </div>
        
        </v-popup>
                    <div class="desc">
                    <img :src="product.img" alt="Some img">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}USD</p>
                    <button class="show__info" @click="isInfoPopupVisible = !isInfoPopupVisible">подробно</button>
                    <button class="buy-btn" @click="cartAPI.addProduct(product)">Купить</button>


<!-- 1                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
<!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
                </div>
            </div>
    `
});