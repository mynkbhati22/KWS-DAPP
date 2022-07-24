import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'MetFx Project',
  '✨MetFx Project ✨',
  'Ryoshi Token',
  'BoobyTrap Token',
  'Lottery Platform for FomoBaby token on BSC',
  'NFT Marketpolace on BSC Testnet',
  'PCS Swap Fork for FOMOBABY',
  'Private Sale Launchpad for $BBT',
  'BetSwamp Token',
  'Betting DAPP',
  'FomoBaby token’s official website',
  'Ankurams',
  'USDM Stablecoin',
  'Elite Butlers',
  'Travel Blog',
  'Memeforce Launchpad',
  'Trippyfrens'
];
const POST_DESCRIBE = [
  'Customized website for MetFx Project to be launched on ETH.',
  'Customized website for MetFx Project to be launched on ETH.',
  'Custom coded website in react for Ryoshi Token deployed on both BSC & ETH.',
  'Website and DAPP for $BBT token on BSC.',
  'Lottery DAPP to hold lotteries on blockchain. Ability to create pots of different values, allow participants to buy lotteries, set max lottery entries per wallet, declare winner. Everything transparent on BSC.',
  'NFT Marketplace with ability to mint NFTs, offer NFTs for purchase, withdraw funds collected from sale of NFTs.',
  'Swap forked from PancakeSwap',
  'Crowdfunding DAPP to help raise funds in BNBs. Funds directly sent to owner’s wallet and investors able to claim their tokens at launch. Token distributioin vested over three weeks for investors.',
  'Custom coded website in react for $BETS token on BSC.',
  'Betting DAPP for BetSwamp project with ability to create events, place bets and claim winnings.',
  'Custom coded website in React for FomoBaby token on BSC.',
  'Ecommerce solution for board game built using WordPress & Woo-Commerce',
  'Stablecoin pegged to GCS, the native currency of GC Centeralized exchange',
  'Business website for Elite Butlers built using WordPress.',
  'Travel blog with JAMStack using Ghost as headless CMS.',
  'Launchpad built on BSC with crowdfunding and factory contracts.',
  'A unique NFT collection for Trippyfrens and minting DAPP.'
];
const POST_LINK = [
  'https://marketplace.metfx.io/',
  'https://marketplace.metfx.io/.',
  'https://www.ryoshitoken.com/',
  'https://boobytrap.live/',
  'https://lotto.fomobaby.app/',
  'https://marketplace.fomobaby.app/',
  'https://swap.fomobaby.app/#/swap',
  'https://privatesale.boobytrap.live/',
  'https://betswamp.com/',
  'https://betswamp.com/app',
  'https://fomobaby.app/',
  'https://ankurams.com/',
  'https://usdm-gctech.netlify.app/?',
  'https://elitebutlers.co.in/',
  'https://ontraveldiary.com/',
  'https://memeforce.app/launchpad/0xc1De7769219d6D14549D8DDfed1093DD86B858B6/$MF',
  'https://www.trippyfrens.com/'
];

const posts = [...Array(16)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/portfolioImages/portimg_${index + 1}.png`,
  title: POST_TITLES[index + 1],
  to: POST_LINK[index + 1],
  description: POST_DESCRIBE[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/portAvatar/portavatar_${index + 1}.png`,
  },
}));

export default posts;
