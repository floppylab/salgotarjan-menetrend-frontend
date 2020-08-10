<template>
  <header>
    <nav>
      <div :class="{ active: active === 0 }" @click="goTo('/')">
        <span>
          <font-awesome-icon icon="map-marked-alt" />
        </span>
        <small>térkép</small>
      </div>
      <div :class="{ active: active === 1 }" @click="goTo('/indulasok')">
        <span>
          <font-awesome-icon icon="hourglass-half" />
        </span>
        <small>indulások</small>
      </div>
      <div :class="{ active: active === 2 }" @click="goTo('/jaratok')">
        <span>
          <font-awesome-icon icon="bus" />
        </span>
        <small>járatok</small>
      </div>
      <div :class="{ active: active === 3 }" @click="goTo('/megallok')">
        <span style="transform: rotate(-90deg);">
          <font-awesome-icon icon="play" />
        </span>
        <small>megállók</small>
      </div>
      <div :class="{ active: active === 4 }" @click="goTo('/informacio')">
        <span>
          <font-awesome-icon icon="info" />
        </span>
        <small>információ</small>
      </div>
    </nav>
    <div>
      {{ title }}
    </div>
  </header>
</template>

<script>
export default {
  name: 'ScheduleHeader',
  props: {
    title: {
      type: String,
      default: 'Salgótarján helyi járati menetrend'
    },
    active: {
      type: Number,
      default: 0
    }
  },
  methods: {
    goTo (link) {
      this.$router.push(link)
    }
  }
}
</script>

<style scoped lang="scss">

  @import '~assets/variables.scss';

  header > div {
    padding: .5rem;
    padding-top: 0.75rem;
    text-align: center;
    font-weight: 400;
    background-color: $secondary-color;
    color: $default-color;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  header > nav {
    background-color: $primary-color;
    color: $default-color;
    display: flex;
    justify-content: center;
  }

  header > nav > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 0.5rem;
    padding-top: 1.25rem;
    max-width: 120px;
    width: 20%;
    cursor: pointer;
  }

  header > nav > div:not(.active):hover {
    background-color: $secondary-color;
  }

  header > nav > div > small {
    padding-top: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .active {
    background-color: $secondary-color;
  }

</style>
