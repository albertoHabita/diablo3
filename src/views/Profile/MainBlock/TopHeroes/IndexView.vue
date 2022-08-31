<template>
  <div class="top-heroes">
    <!-- Título con nuestra fuente Diablo-like -->
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <!-- 3 columnas, una para cada TopHero -->
    <b-row>
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <b-col sm="4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHero con datos como prop -->
        <TopHero :hero="hero"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TopHero from './TopHero'

export default {
  name: 'TopHeroes',
  components: { TopHero },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="stylus">
.grid-container
  display grid
  grid-template-columns 1fr

  .grid-item
    &.item-left
      grid-column span 1

    &.item-right
      grid-column span 1

@media (min-width: 992px)
  .grid-container
    display grid
    grid-template-columns repeat(6, 1fr)

    .grid-item
      &.item-left
        grid-column span 4

      &.item-right
        grid-column span 2
</style>
