export type TCard = {
  type: CardType
  value: CardValue
}

export enum CardType {
  Club = 'CLUB',
  Diamond = 'DIAMOND',
  Heart = 'HEART',
  Spade = 'SPADE',
}

export enum CardValue {
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Ace = -1,
  Jack = -2,
  King = -3,
  Queen = -4,
  RedJoker = -5,
  BlackJoker = -6,
}
