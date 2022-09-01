<template>
  <div>
    <h1>Heroes List</h1>
    <b-table dark hover small striped stacked="sm" :items="heroes" :fields="fields">
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item"/>
      </template>
      <template v-slot:cell(class)="data">
        <HeroClassLevel :hero="{ class: data.item.class, level: data.item.level}"/>
      </template>
      <template v-slot:cell(kills)="data">
        <span>{{ $filters.formatNumber(data.item.kills.elites) }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from '@/views/Profile/MainBlock/HeroesList/HeroIco'
import HeroClassLevel from '@/views/Profile/MainBlock/HeroesList/HeroClassLevel'

export default {
  name: 'HeroesList',
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  components: { HeroIco, HeroClassLevel },

  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  }
}
</script>
