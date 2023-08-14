<template>
  <div class="page--padded">
    <CardComponent>
      <div class="flex flex-col md:flex-row text-[11px]">
        <div class="image w-[232px] mx-auto text-center mb-5">
          <SanityImage
            class="w-[182px] h-auto mx-auto"
            :asset-id="player.cardImage.asset._ref"
            auto="format"
          />
        </div>
        <div class="stats">
          <div class="w-1/3 mr-2">
            <div class="flex justify-between border-t border-b border-white">
              <div>PAC</div>
              <div>{{ player.statistics.pace.average }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Acceleration</div>
              <div>{{ player.statistics.pace.acceleration }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Sprint Speed</div>
              <div>{{ player.statistics.pace.sprintSpeed }}</div>
            </div>
          </div>
          <div class="w-1/3 mr-2">
            <div class="flex justify-between border-t border-b border-white">
              <div>SHO</div>
              <div>{{ player.statistics.shooting.average }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Positioning</div>
              <div>{{ player.statistics.shooting.positioning }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Finishing</div>
              <div>{{ player.statistics.shooting.finishing }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Shot Power</div>
              <div>{{ player.statistics.shooting.shotPower }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Penalty</div>
              <div>{{ player.statistics.shooting.penalties }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Volleys</div>
              <div>{{ player.statistics.shooting.volleys }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Long Shot</div>
              <div>{{ player.statistics.shooting.longShot }}</div>
            </div>
          </div>
          <div class="w-1/3 mr-2">
            <div class="flex justify-between border-t border-b border-white">
              <div>PAS</div>
              <div>{{ player.statistics.passing.average }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Vision</div>
              <div>{{ player.statistics.passing.vision }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Long Pass</div>
              <div>{{ player.statistics.passing.longPassing }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Free Kick</div>
              <div>{{ player.statistics.passing.freeKick }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Crossing</div>
              <div>{{ player.statistics.passing.crossing }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Curve</div>
              <div>{{ player.statistics.passing.curve }}</div>
            </div>
          </div>
        </div>
        <div class="stats">
          <div class="w-1/3 mr-2">
            <div class="flex justify-between border-t border-b border-white">
              <div>DRI</div>
              <div>{{ player.statistics.dribbling.average }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Balance</div>
              <div>{{ player.statistics.dribbling.balance }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Composure</div>
              <div>{{ player.statistics.dribbling.composure }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Reactions</div>
              <div>{{ player.statistics.dribbling.reactions }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Agility</div>
              <div>{{ player.statistics.dribbling.agility }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Ball Control</div>
              <div>{{ player.statistics.dribbling.ballControl }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Dribbling</div>
              <div>{{ player.statistics.dribbling.dribbling }}</div>
            </div>
          </div>
          <div class="w-1/3 mr-2">
            <div class="flex justify-between border-t border-b border-white">
              <div>DEF</div>
              <div>{{ player.statistics.defense.average }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Slide Tackle</div>
              <div>{{ player.statistics.defense.slidingTackle }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Awareness</div>
              <div>{{ player.statistics.defense.defAwareness }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Tackle</div>
              <div>{{ player.statistics.defense.standingTackle }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Interceptions</div>
              <div>{{ player.statistics.defense.interceptions }}</div>
            </div>
          </div>
          <div class="w-1/3 mr-2">
            <div class="flex justify-between border-t border-b border-white">
              <div>PHY</div>
              <div>{{ player.statistics.physical.average }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Jumping</div>
              <div>{{ player.statistics.physical.jumping }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Strength</div>
              <div>{{ player.statistics.physical.strength }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Stamina</div>
              <div>{{ player.statistics.physical.stamina }}</div>
            </div>
            <div class="py-1 flex justify-between">
              <div>Aggression</div>
              <div>{{ player.statistics.physical.aggression }}</div>
            </div>
          </div>
        </div>
      </div>
    </CardComponent>
    <div class="mt-2 mx-3">
      <div class="flex items-end">
        <h1 class="mr-2 !mb-0">{{ player.name }}</h1>
        <a href="#">View all cards</a>
      </div>
      <div class="details w-full flex flex-col md:flex-row mt-5">
        <div
          class="detail w-12/12 md:w-1/12 border-b md:border-b-0 md:border-r border-slate-700 py-5 md:pl-3 md:py-0"
        >
          <h4>Club</h4>
          {{ player.club }}
        </div>
        <div
          class="detail w-12/12 md:w-3/12 border-b md:border-b-0 md:border-r border-slate-700 py-5 md:pl-3 md:py-0"
        >
          <h4>League</h4>
          {{ player.league }}
        </div>
        <div
          class="detail w-12/12 md:w-1/12 border-b md:border-b-0 md:border-r border-slate-700 py-5 md:pl-3 md:py-0"
        >
          <h4>Nation</h4>
          {{ player.nation }}
        </div>
        <div
          class="detail w-12/12 md:w-2/12 border-b md:border-b-0 md:border-r border-slate-700 py-5 md:pl-3 md:py-0"
        >
          <h4>Strong Foot</h4>
          {{ player.strongFoot }}
        </div>
        <div
          class="detail w-12/12 md:w-2/12 border-b md:border-b-0 md:border-r border-slate-700 py-5 md:pl-3 md:py-0"
        >
          <h4>Age</h4>
          {{ player.age }}
        </div>
        <div
          class="detail w-12/12 md:w-2/12 border-b md:border-b-0 md:border-r border-slate-700 py-5 md:pl-3 md:py-0"
        >
          <h4>Height</h4>
          {{ player.height }}
        </div>
        <div class="w-12/12 md:w-2/12 py-5 md:pl-3 md:py-0">
          <h4>Workrates</h4>
          {{ player.workRatesAttacking }} / {{ player.workRatesDefensive }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { groq } from '@nuxtjs/sanity'
import { SanityImage } from '@nuxtjs/sanity/dist/components/sanity-image'
import { Player } from '~/types/app'

const query = groq`{ "data": *[_type == "fifaCard" && _id == $playerId] }`

export default Vue.extend({
  components: { SanityImage },
  layout: 'default',
  async asyncData({ app: { $sanity }, params }) {
    const playerId = params.playerId
    const data = await $sanity.fetch<{ data: Player[] }>(query, { playerId })
    const player = data.data[0]

    return { player }
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    console.log(this.player)
  },
})
</script>
