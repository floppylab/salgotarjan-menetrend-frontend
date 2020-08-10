<template>
  <div class="container">
    <!--<img src="~/assets/backpack-green.png" alt="Karancs-Medves Kalauz logó">-->

    <div>
      <h1>hoppá, úgy néz ki, hogy valamilyen hiba történt!</h1>
      <p>Jelentsd be nekünk, hogy hiba történt és hogyan jutottál ide, vagy térj vissza a térképhez! :)</p>
      <form>
        <div class="button-row">
          <nuxt-link :to="{name: 'informacio'}" tag="button">
            segítek, és bejelentem a hibát!
          </nuxt-link>
          <nuxt-link :to="{name: 'index'}" tag="button">
            nézzük a térképet
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'simple'
}
</script>

<style scoped>
  h1 {
    padding-bottom: 10px;
  }

  p {
    margin-top:0;
    padding-bottom: 30px;
  }
</style>
