<template>
    <div>
        <h1 style="text-align: left; padding-left: 5%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
            {{ t('cart') }}</h1>
        <div class="section">
            <div
                class="container"
                v-for="product in products"
                :key="product.id"
            >
                <img :src="require(`../images/${product.image}.jpg`)" width="200">
                <p>{{ t('title') }}: {{ product.title }}</p>
                <p>{{ t('author') }}: {{ product.author }}</p>
                <p>{{ t('price') }}: {{ product.price }} ₽</p>
                <p>{{ t('publishingHouse') }}: {{ product.publishing_house }}</p>
                <p>{{ t('quantity') }}: {{ product.quantity }} {{ t('pcs') }}.</p>
                
            </div>
        </div>
        <p>{{ t('total') }}: {{ total }} ₽</p>
        <button onclick="document.location='/order-payment'">{{ t('pay') }}</button>
    </div>
</template>

<script>
  import { useI18n } from "vue-i18n";
  import { mapGetters } from 'vuex'
  export default {
    methods: {
      setLocale(locale) {
        this.$i18n.locale = locale;
        localStorage.setItem("locale", locale);
      }
    },
    computed: {
        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotal'
        })
    },
    setup() {
      const { t } = useI18n({
        inheritLocale: true,
        useScope: "local",
      });
      return { t };
    },
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