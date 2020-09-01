<template>
  <div class="line">
    <div v-if="number" class="number">
      {{ number }}
    </div>
    <div class="text">
      {{ text }}
    </div>
    <div>{{ time }}</div>
    <div v-if="lines.length > 0" id="lines">
      <div v-for="line in lines" :key="line.id" class="number">
        {{ line }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoLine',
  props: {
    number: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: null
    },
    lines: {
      type: Array,
      default: () => { return [] }
    }
  },
  created () {
    this.$store.dispatch('getLines')
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

  .line {
    display: flex;
    padding: 1rem;
    width: 100%;
    max-width: $max-page-width;
    margin: 0 auto;
    align-items: center;
  }

  .line > * {
    padding: 0.5rem;
  }

  .line > #lines {
    padding: 0
  }

  .number {
    padding: 0.5rem;
    background-color: $tertiary-color;
    color: white;
    min-width: 3rem;
    text-align: center;
    border-radius: 5px;
  }

  .number a {
    color: white !important;
    cursor: pointer;
  }

  .text {
    flex-grow: 1;
  }

  .line:hover {
    background-color: white;
  }

  #lines {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  #lines .number {
    margin: 0.2rem 0.5rem 0.2rem 0;;
  }

</style>
