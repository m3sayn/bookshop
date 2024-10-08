<template>
    <div style="align-items: center; margin-top: 10%;">
        <button onclick="document.location='/shopping-list'">{{ t('toOrders') }}</button>
    </div>
</template>

<script>
  import { useI18n } from "vue-i18n"
  export default {
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
  }
</script>

<style scoped>
button {
  padding: 17px 40px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  box-shadow: hsl(0, 0%, 0%) 0px 7px 29px 0px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
}

button:hover {
  letter-spacing: 3px;
  background-color: rgb(255, 255, 255);
  color: hsl(0, 0%, 0%);
  box-shadow: hsl(0, 0%, 0%) 0px 7px 29px 0px;
}

button:active {
  letter-spacing: 3px;
  background-color: rgb(255, 255, 255);
  color: hsl(0, 0%, 0%);
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px;
  transform: translateY(10px);
  transition: 100ms;
}
</style>

