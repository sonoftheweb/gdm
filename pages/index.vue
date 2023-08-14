<template>
  <div class="page">
    <table class="player-table">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="font-normal bg-black last:text-left p-3 first:border-0 last:border-0 border-r border-slate-700 first:w-auto w-[70px] last:w-auto cursor-pointer"
            @click="sort(column.key)"
          >
            {{ column.label }}
            <img
              v-if="sortBy === column.key && sortOrder === 'asc'"
              class="inline-flex"
              src="~/assets/images/up-arrow.svg"
              alt="sort"
            />
            <img
              v-else-if="sortBy === column.key && sortOrder === 'desc'"
              class="inline-flex"
              src="~/assets/images/down-arrow.svg"
              alt="sort"
            />
            <img
              v-else
              class="inline-flex"
              src="~/assets/images/sort-icon.svg"
              alt="sort"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="player in data"
          :key="player._id"
          class="bg-zinc-900 border-b border-black -ml-px -mr-px px-px"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            class="p-3 text-center cursor-pointer"
          >
            <div
              v-if="
                [
                  'rating',
                  'position',
                  'type',
                  'pace',
                  'shooting',
                  'passing',
                  'dribbling',
                  'physical',
                  'workRates',
                ].includes(column.key)
              "
              :class="[
                'stat-box',
                column.key === 'workRates' ? '!ml-0' : 'ml-auto',
                column.key === 'rating'
                  ? 'stat-box--light'
                  : column.key === 'position' ||
                    column.key === 'type' ||
                    column.key === 'workRates'
                  ? 'stat-box--dark'
                  : 'stat-box--dark-outlined',
              ]"
            >
              {{ displayPlayerData(player, column.key) }}
            </div>
            <div v-else>
              <NuxtLink
                class="text-white no-underline"
                :to="`/players/${player._id}`"
                >{{ displayPlayerData(player, column.key) }}
              </NuxtLink>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { groq } from '@nuxtjs/sanity'
import { Player, PlayerKeys } from '~/types/app'

const query = groq`{ "data": *[_type == "fifaCard"]{
      _id,
      name,
      rating,
      position,
      "type": position,
      "pace": statistics.pace.average,
      "shooting": statistics.shooting.average,
      "passing": statistics.passing.average,
      "dribbling": statistics.dribbling.average,
      "physical": statistics.physical.average,
      "workRates": workRatesAttacking + ' ' + workRatesDefensive,
    } }`

export default Vue.extend({
  layout: 'default',
  async asyncData({ app: { $sanity } }) {
    const data = await $sanity.fetch<{ data: Player[] }>(query)
    return { data: data.data as Player[], defaultData: [...data.data] }
  },
  data() {
    return {
      data: [] as Player[],
      defaultData: [] as Player[],
      sortBy: '' as string,
      sortOrder: '' as string,
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'rating', label: 'OVR' },
        { key: 'position', label: 'POS' },
        { key: 'type', label: 'Type' },
        { key: 'pace', label: 'PAC' },
        { key: 'shooting', label: 'SHO' },
        { key: 'passing', label: 'PAS' },
        { key: 'dribbling', label: 'DRI' },
        { key: 'physical', label: 'PHY' },
        { key: 'workRates', label: 'WR' },
      ],
    }
  },
  methods: {
    sort(column: string) {
      if (this.sortBy === column) {
        if (this.sortOrder === 'asc') {
          this.sortOrder = 'desc'
        } else if (this.sortOrder === 'desc') {
          this.sortOrder = ''
        } else if (this.sortOrder === '') {
          this.sortOrder = 'asc'
        }
      } else {
        this.sortBy = column
        this.sortOrder = 'asc'
      }
      if (this.sortOrder) {
        this.data.sort((a, b) => {
          const key = column as PlayerKeys

          const aValue = a[key]
          const bValue = b[key]

          if (aValue !== undefined && bValue !== undefined) {
            if (aValue < bValue) return this.sortOrder === 'asc' ? -1 : 1
            if (aValue > bValue) return this.sortOrder === 'asc' ? 1 : -1
          }

          return 0
        })
      } else {
        this.data = [...this.defaultData]
      }
    },
    displayPlayerData(player: Player, columnKey: string) {
      const key = columnKey as PlayerKeys

      if (key === 'workRates') {
        if (player.workRates) {
          const wr = player.workRates.split(' ')
          return wr[0][0] + ' \\ ' + wr[1][0]
        } else {
          return '-'
        }
      }
      return player[key]
    },
  },
})
</script>
