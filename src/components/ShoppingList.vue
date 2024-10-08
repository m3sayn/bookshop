<template>
    <div>
        <h1 style="text-align: left; padding-left: 5%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>
            {{ t('availableBooks') }}
        </h1>
       
        <img
            v-if="loading"
            src="https://i.imgur.com/JfPpwOA.gif"
        >
        <div class="section" v-else>
            <div
                class="container"
                v-for="product in products"
                :key="product.id"
            >
                <!-- <img src="../images/ontheroad.jpg" width="200"/> -->
                
                <img :src="require(`../images/${product.image}.jpg`)" width="200">
                <p>{{ t('title') }}: {{ product.title }}</p>
                <p>{{ t('author') }}: {{ product.author }}</p>
                <p>{{ t('price') }}: {{ product.price }} ₽</p>
                <p>{{ t('publishingHouse') }}: {{ product.publishing_house }}</p>
                <p>{{ t('inventory') }}: {{ product.inventory }} {{ t('pcs') }}</p>
                <button
                    :disabled="!productIsInStock(product)"
                    @click="addProductToCart(product)"
                >
                    {{ t('addToCart') }}
                </button>
            </div>
        </div>
    </div>
    <ShoppingCart></ShoppingCart>
</template>

<script>
    import ShoppingCart from './ShoppingCart.vue';
    import { mapState, mapGetters, mapActions } from 'vuex'
    import { useI18n } from "vue-i18n";

    export default {
        data(){
            return {
                loading: false,
                productIndex: 1
            }
        },
        computed:{
            ...mapState({
                products: state => state.products.items,
            }),
            ...mapGetters({
                productIsInStock: 'productIsInStock'
            })
        },
        methods: {
            ...mapActions({
                fetchProducts: 'fetchProducts',
                addProductToCart: 'addProductToCart'
            }),
            setLocale(locale) {
                this.$i18n.locale = locale;
                localStorage.setItem("locale", locale);
            }
        },
        setup() {
            const { t } = useI18n({
                inheritLocale: true,
                useScope: "local",
                });
            return { t };
        },
        created (){
            this.loading = true
            this.fetchProducts()
                .then(()=>this.loading = false)
        },
        components: {
            ShoppingCart
        }
    }
</script>

<style scoped>
    .section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: start
    }
    button {
        appearance: none;
        background-color: #fafbfc;
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: 6px;
        box-shadow:
            rgba(27, 31, 35, 0.04) 0 1px 0,
            rgba(255, 255, 255, 0.25) 0 1px 0 inset;
        box-sizing: border-box;
        color: #24292e;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        list-style: none;
        padding: 6px 16px;
        position: relative;
        transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;
        word-wrap: break-word;
    }

    button:hover {
        background-color: #f3f4f6;
        text-decoration: none;
        transition-duration: 0.1s;
    }

    button:disabled {
        background-color: #fafbfc;
        border-color: rgba(27, 31, 35, 0.15);
        color: #959da5;
        cursor: default;
    }

    button:active {
        background-color: #edeff2;
        box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
        transition: none 0s;
    }

    button:focus {
    outline: 1px transparent;
    }

    button:before {
    display: none;
    }

    button:-webkit-details-marker {
    display: none;
    }
</style>