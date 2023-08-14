export interface Slug {
  current: string
  _type: string
}

export interface ImageReference {
  _ref: string
  _type: string
}

export interface StatisticsGroup {
  average: number

  [key: string]: number
}

export interface Player {
  _id: string
  cardType?: string
  gameVersion?: number
  nation?: string
  rating?: number
  description?: string
  weakFoot?: number
  _createdAt?: string
  slug?: Slug
  isGoalkeeper?: boolean
  pace?: number
  shooting?: number
  passing?: number
  dribbling?: number
  physical?: number
  type?: string
  workRates?: string
  statistics?: {
    shooting?: StatisticsGroup
    passing?: StatisticsGroup
    physical?: StatisticsGroup
    dribbling?: StatisticsGroup
    defense?: StatisticsGroup
    pace?: StatisticsGroup
  }
  cardImage?: {
    _type?: string
    asset?: ImageReference
  }
  _updatedAt?: string
  skillMoves?: number
  league?: string
  _type?: string
  workRatesDefensive?: string
  name?: string
  club?: string
  strongFoot?: string
  workRatesAttacking?: string
  height?: string
  goalkeeperStatistics?: object
  position?: string
  age?: string
  _rev?: string
}

export type PlayerKeys = keyof Player
