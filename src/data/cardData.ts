import type {Img} from './imgData';

export type CardData = {
  imgSrc: string;
  images?: Array<Img>;
  slug: string;
  heading: string;
  text: string | Array<string>;
}

const flying: CardData = {
  imgSrc: "/flying.webp",
  slug: "/gallery/flying",
  heading: 'Flying',
  text: 'Flying a Cessna. I think.'
};

const mechanical: CardData = {
  imgSrc: '/engine.webp',
  slug: '/gallery/mechanical',
  heading: 'Mechanics, handyman, "no - et al"  :p',
  text: 'This photo was taken during a repair as a reference to insure the correct alignment of the two timing chains during the replacement of the balance shafts in my present car and represents the wide scope of abilities and experience in my life.  My childhood home included both wood and metal working equipment and both a stick and an oxy-acetylene rig.  Vehicle and appliance repairs were the norm.  My father was a co-owner of a company that manufactured air-impact pulverizers and at one point, rented out a section of the facility where I met aeronautical engineer Dr. Alexander Lippisch as I watched the building and test flight of a prototype ground effect aircraft.  I operated a milling machine and was given the controls of an airplane before entering high school.  Over the years, I have done full engine rebuilds, HVAC repairs, modified expansion chambers, and so much more.'
}

const forex: CardData = {
  imgSrc: '/forex.webp',
  slug: '/gallery/forex',
  heading: 'Technical Trading Indicators and expert advisors',
  text: [
    'Meta Mind Works@ rose out of a dozen years of research, study, and trading of the Forex market.  MetaTrader has been my primary (Forex) platform that has allowed me to develop indicators, expert advisors, scripts, and accomplish technical market analysis through the use of the MQL4 programming language.',
    'After examining, researching, and modifying both common and esotaric indicators and studying filtering techniques, I settled on writing and using my own indicators as my primary trading tools.',
    'To forestall having to page through a myriad of charts, and also to make the trading experience more relaxed and comprehensive, I developed a dashboard that allows the monitoring of large groupings of currency pairs at one glance.  This dashboard supplies pertinent data in an easy to read format.  Expert advisors have been written and are also under development.',
    'A beta version of the dashboard is scheduled to go public in the fourth quarter of 2023'
  ],
  images: [
    {
      id: 0,
      attribution: 'Forex',
      imgurl: '/forex.webp',
    },
    {
      id: 1,
      attribution: 'Forex',
      imgurl: '/forex_1.webp',
    }
  ]
}

export const cardData: Array<CardData> = [flying, mechanical, forex];
