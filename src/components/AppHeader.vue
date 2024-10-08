<template>
    <header>
        <div class="wrap-logo">
            <a href="/" class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-book" viewBox="0 -2 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                </svg>
                {{ t('name') }}
            </a>
        </div>
        <nav>
            <!-- <a href="/">Главная</a> -->
            <a href="/shopping-list" style="font-weight: lighter;">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                {{ t('orders') }}
            </a>
            <a>
              <button
                @click="setLocale(this.$i18n.locale === 'ru' ? 'en' : 'ru')"                
                class="round">
                <img :src="require(`../images/lang.png`)" width="25" height="25" alt="Язык"
              >
              </button>
            </a>
        </nav>
    </header>
    <hr>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HelloI18n",
  data() {
    return {
      name: "manon"
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("locale", locale);
    },
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });
    return { t };
  },
});
</script>

<style scoped>
* {box-sizing: border-box;}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  padding: 0px 10px;
  max-height:20%;
}

hr {
    border: none; /* Убираем границу */
    background-color: rgb(0, 0, 0); /* Цвет линии */
    color: rgb(0, 0, 0); /* Цвет линии для IE6-7 */
    height: 0.5px; /* Толщина линии */
   }

.wrap-logo {
  display: flex;
  align-items: center;
}

header a {
  color: #212121;
  padding: 5px;
  text-decoration: none;
  font-size: 20px;
  text-align: justify;
}

header a.logo {
  font-size: 20px;
  font-weight: medium;
}

header a:hover {
  /* background-color:rgb(83, 175, 255);; */
  color: #212121;
}

nav {
  display: flex;
  align-items: center;
}

button.round {
  width: 30px; height: 30px; /* Размеры кнопки */
  background-color: #ffffff; /* Цвет фона */
  border-radius: 50%; /* Радиус скругления */
  border: none; /* Убираем рамку вокруг кнопки */
}
</style>