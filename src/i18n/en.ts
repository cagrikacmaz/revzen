import type { Dict } from './index';

export const en: Dict = {
  meta: {
    lang: 'en',
    locale: 'en-US',
    title: 'Revzen | Investor Presentation',
    description: 'Revzen, daylight that moves. Investor presentation for a dynamic artificial window.',
  },
  brandLine: 'Revzen, daylight that moves',

  ui: {
    skipToContent: 'Skip to content',
    primaryNav: 'Main navigation',
    menu: 'Sections',
    langSwitchLabel: 'View this page in Turkish',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Message on WhatsApp',
    whatsappMessage: "Hi, I'd like to talk about the Revzen presentation.",
    conceptCaption: 'Concept illustration, not a product photo',
    opensInNewTab: '(opens in a new tab)',
  },

  nav: [
    { id: 'product', label: 'Product' },
    { id: 'uses', label: 'Uses' },
    { id: 'market', label: 'Sales' },
    { id: 'progress', label: 'Progress' },
    { id: 'ask', label: 'Investment' },
    { id: 'profit', label: 'Profit' },
    { id: 'plan', label: 'Plan' },
    { id: 'terms', label: 'Terms' },
  ],

  sun: {
    figureLabel: 'Sun clock: cross-sections of rooms with an artificial window',
    svgTitle: 'Cross-section of a room with an artificial window in the ceiling',
    svgDesc:
      'A beam of light enters through the ceiling window, leaves a patch of light on the floor and casts the shadow of a potted plant. As the time changes, the angle and colour of the light and the direction of the shadow change.',
    wallSvgTitle: 'Cross-section of a room with an artificial window in the left wall',
    wallSvgDesc:
      'A beam of light enters sideways through the wall window, leaves a patch of light on the floor and casts the shadow of a potted plant. In the morning and evening the light reaches deep into the room at a low angle; at noon it stays close to the window.',
    sliderLabel: 'Time of day',
    quickLabel: 'Jump to',
    play: 'Play the day',
    modeLegend: 'Compare',
    modeColour: 'Colour-only panel',
    modeDirectional: 'Directional light',
    modeNoteColour: 'The panel changes only its colour and brightness. The light patch and the shadow stay where they are.',
    modeNoteDirectional: 'The angle of the light, its patch on the floor and the direction of the shadow move together through the day.',
    readTime: 'Time',
    readDirection: 'Ceiling light direction',
    readWall: 'Wall light angle',
    readLevel: 'Light level',
    readTone: 'Tone',
    dirEast: '{deg}° from east',
    dirWest: '{deg}° from west',
    dirOverhead: 'Overhead',
    dirFixed: 'Fixed, overhead',
    wallAngle: '{deg}°',
    wallFixed: 'Fixed',
    toneWarm: 'Warm amber',
    toneNeutral: 'Neutral white',
    toneOrange: 'Orange',
    level: '{n}%',
    valueText: '{time}, light {dir}, level {level}, tone {tone}',
  },

  hero: {
    eyebrow: '$90,000 investment plan',
    headline: 'Beyond light. An experience of the sun.',
    subhead:
      'The Turkish launch of a premium artificial window designed to change not only the colour of its light through the day, but the direction it comes from.',
    metrics: [
      { value: '$90K', label: 'Initial investment' },
      { value: '100 days', label: 'From sample to first sale' },
      { value: '1,000 / 10,000', label: 'Unit scenarios' },
    ],
  },

  why: {
    heading: 'Why Revzen?',
    paragraphs: [
      'In Turkish architecture, light was never left to chance. Across the centuries from the Anatolian Seljuks through the beyliks to the Ottomans, master builders shaped a space around where light would enter, how much of it, and in what colour.',
      'The revzen is one of the most refined pieces of that tradition: a window of coloured glass set into fine carved plaster tracery. It does not simply let daylight in. It filters it, softens it and carries it through the room in tones that change over the day. In the hammams, small glass openings in the domes brought the sky down into rooms that had no windows at all.',
      "Revzen takes its name from that heritage. What those craftsmen did with plaster and glass, we do with today's optics and lighting technology: we bring daylight that changes in direction, colour and intensity from morning to evening into rooms without a window. The aim is not only to light a space, but to make light part of the architecture again.",
    ],
  },

  product: {
    eyebrow: 'What we sell',
    headline: 'Not a decorative panel. A sense of the sun moving.',
    thesis:
      'We want to bring daylight that changes direction over time into a windowless room, not just a blue ceiling.',
    mountHeading: 'On the ceiling or on the wall.',
    mountText:
      'Revzen is being designed for two mounting options. In the ceiling version the light comes from above and shadows turn around the room through the day. In the wall version the light enters from the side: in the morning and evening it reaches deep into the room at a low angle, and at noon it stays close to the foot of the window. That brings the same effect to spaces without a suspended ceiling or with a low ceiling height.',
    mountCeiling: 'Ceiling mount',
    mountWall: 'Wall mount',
    statesLabel: 'Three moments of the day',
    stateDirection: 'Direction',
    stateLevel: 'Light level',
    stateTone: 'Tone',
    states: [
      { time: '08:00', minutes: 480, name: 'Morning', direction: 'From the east, at a low angle', level: 'Medium', tone: 'Warm amber' },
      { time: '12:00', minutes: 720, name: 'Noon', direction: 'From overhead, steep', level: 'Highest', tone: 'Neutral white' },
      { time: '17:00', minutes: 1020, name: 'Evening', direction: 'From the west, at a low angle', level: 'Medium', tone: 'Orange' },
    ],
  },

  uses: {
    eyebrow: 'Uses',
    headline: 'Where it goes.',
    items: [
      { icon: 'villa', title: 'Villas and residences', text: 'Basements, inner rooms, bathrooms' },
      { icon: 'spa', title: 'Hotels, spas and hammams', text: 'Windowless wet areas and corridors' },
      { icon: 'office', title: 'Offices', text: 'Meeting rooms and interior workspaces' },
      { icon: 'clinic', title: 'Clinics and healthcare', text: 'Waiting, treatment and recovery rooms' },
      { icon: 'retail', title: 'Retail and showrooms', text: 'Spaces where light sells the product' },
    ],
  },

  market: {
    eyebrow: 'Sales model',
    headline: 'Show it installed first. Then scale.',
    lead: 'First market: Turkey. Premium architectural projects, plus direct sales driven by before-and-after installation videos.',
    channels: [
      {
        num: '01',
        title: 'B2B / Projects',
        text: 'Architects, interior designers, villas, hotels and spas, boutique commercial spaces.',
        steps: ['Demo', 'Site survey', 'Quote', 'Project win'],
      },
      {
        num: '02',
        title: 'Direct e-commerce',
        text: 'Real installation videos, online quotes and payment, performance campaigns.',
        steps: [],
      },
      {
        num: '03',
        title: 'Channel partners',
        text: 'Installer electricians, architecture studios, selective distributors.',
        steps: [],
      },
    ],
    stepsLabel: 'Sales process',
    mixTitle: 'Sales mix',
    mix: [
      { label: 'B2B / Projects', share: 60, display: '60%' },
      { label: 'Direct', share: 40, display: '40%' },
    ],
    note: 'The US and Amazon are not a priority in phase one. They become the second market once certification, logistics and real net margin are confirmed.',
  },

  progress: {
    eyebrow: 'Progress',
    headline: 'Where we are.',
    subhead: 'Research, model and brand are in place. Supplier samples are next.',
    listLabel: 'Project steps',
    statusDone: 'Done',
    statusCurrent: 'Now',
    statusUpcoming: 'Next',
    steps: [
      { status: 'done', title: 'Market and competitor analysis', detail: 'Turkey, US and China' },
      { status: 'done', title: 'Import, duty and landed cost analysis', detail: '' },
      { status: 'done', title: 'Manufacturer scan and shortlist', detail: '3 manufacturers' },
      { status: 'done', title: 'Financial model and investment plan', detail: '' },
      { status: 'done', title: 'Brand', detail: 'Revzen' },
      { status: 'done', title: 'Investor presentation and website', detail: '' },
      { status: 'current', title: 'Supplier quotes and sample orders', detail: '' },
      { status: 'upcoming', title: 'Sample testing and supplier selection', detail: 'Days 0-30' },
      { status: 'upcoming', title: 'Pilot installations', detail: 'Days 31-60' },
      { status: 'upcoming', title: 'First batch and sales', detail: 'Days 61-100' },
    ],
  },

  ask: {
    eyebrow: 'The ask',
    headline: '$90,000. One clear plan.',
    subhead:
      'The goal is not to buy 1,000 units. It is to get the product technically approved, enter the market with initial stock and start generating sales data.',
    chartTitle: 'Use of funds (USD)',
    bars: [
      { label: 'Initial stock / import, excl. VAT', value: 33000, display: '$33,000', reserve: false },
      { label: 'Optical validation, samples', value: 11000, display: '$11,000', reserve: false },
      { label: 'Import VAT cash buffer', value: 11000, display: '$11,000', reserve: false },
      { label: 'First performance campaigns', value: 10000, display: '$10,000', reserve: false },
      { label: 'Testing, compliance, advisory', value: 8000, display: '$8,000', reserve: false },
      { label: 'E-commerce / CRM launch', value: 6000, display: '$6,000', reserve: false },
      { label: 'Reserve and contingency', value: 6000, display: '$6,000', reserve: true },
      { label: 'Reference installation and demo', value: 5000, display: '$5,000', reserve: false },
    ],
    totalLabel: 'Total',
    note: 'First batch ≈ 60-70 units (assumed landed cost ≈ $480/unit). The actual quantity will be set once supplier quotes and customs are confirmed.',
  },

  profit: {
    eyebrow: 'Profitability',
    headline: 'Profit at 1,000 and 10,000 units.',
    subhead: 'Assumes a 12-month sales period. Prices exclude VAT; installation is priced separately.',
    scenarios: ['1,000 units', '10,000 units'],
    preTax: 'Pre-tax profit',
    net: 'Net profit',
    margin: 'Profit margin (pre-tax)',
    tableCaption: 'Income statement, 12 months',
    itemColumn: 'Item',
    rows: {
      revenue: 'Revenue',
      product: 'Product and import',
      channel: 'Sales, channel and ads',
      service: 'Warranty and service',
      fixed: 'Fixed costs',
      totalCosts: 'Total costs',
      preTax: 'Pre-tax profit',
      tax: 'Corporate tax 25%',
      net: 'Net profit',
      netPerUnit: 'Net profit per unit',
    },
    avgPrice:
      'Average price: $1,070 in the 1,000-unit scenario (B2B $1,150, direct $950, a 60% / 40% mix); $1,000 in the 10,000-unit scenario.',
    fixedTitle: 'Fixed cost breakdown',
    fixedRows: [
      { cells: ['Management / business development', '$40K', '$120K'], total: false },
      { cells: ['Core team / operations', '$42K', '$500K'], total: false },
      { cells: ['Brand, content / PR', '$24K', '$120K'], total: false },
      { cells: ['Software / data / CRM', '$20K', '$170K'], total: false },
      { cells: ['Accounting, legal, office', '$15K', '$110K'], total: false },
      { cells: ['Customer and field support', '$24K', '$230K'], total: false },
      { cells: ['Total', '$165K', '$1.25M'], total: true },
    ],
    growth:
      'At the 10,000-unit scale, annual procurement comes to about $4.2M. That growth is supported by revolving stock, customer deposits and distributor financing.',
    footnote: 'Corporate tax is assumed at 25%. Financing costs and depreciation are not included in the model.',
  },

  calc: {
    eyebrow: 'Scenario calculator',
    headline: 'Test the assumptions yourself.',
    intro: 'Base values fill in from the selected scenario. Results update as you type.',
    scenarioLegend: 'Scenario',
    scenario1000: '1,000 units',
    scenario10000: '10,000 units',
    inputsLegend: 'Assumptions (USD, excl. VAT)',
    units: 'Units',
    price: 'Average price',
    landed: 'Product and import cost per unit',
    channel: 'Sales and ads per unit',
    service: 'Warranty and service per unit',
    fixed: 'Annual fixed costs',
    deviationLegend: 'Changes',
    priceDev: 'Price change',
    costDev: 'Product cost change',
    costDevHint: 'Applies to product and import cost only.',
    presetsLabel: 'Presets',
    presets: { cautious: 'Cautious', base: 'Base', optimistic: 'Optimistic' },
    presetTableCaption: 'Pre-tax profit',
    resultsLabel: 'Results',
    revenue: 'Revenue',
    totalCosts: 'Total costs',
    preTax: 'Pre-tax profit',
    net: 'Net profit (after 25% tax)',
    netPerUnit: 'Net profit per unit',
    breakEven: 'Break-even',
    breakEvenText: 'Profitable after {n} units',
    noBreakEven: 'Not profitable with these assumptions',
    percent: '{n}%',
    formula:
      'Total costs = units × (product and import + sales and ads + warranty and service) + annual fixed costs. No tax is applied to a loss.',
    note: 'The calculator is a simplified version of the deck model. Financing and VAT cash effects are not included.',
  },

  plan: {
    eyebrow: '100-day plan',
    headline: 'Proof first. Then sales the investment accelerates.',
    subhead: 'Capital is deployed in stages.',
    phases: [
      {
        days: 'Days 0-30',
        title: 'Technical proof',
        scope: '3 samples / 2 manufacturers',
        text: 'Verify angle and shadow movement, power, certification and warranty.',
      },
      {
        days: 'Days 31-60',
        title: 'Pilot installation',
        scope: '2-4 demo installs',
        text: 'Live test in an architect, hotel or villa setting; price negotiation.',
      },
      {
        days: 'Days 61-100',
        title: 'Market test',
        scope: 'First batch and orders',
        text: 'E-commerce, quoting CRM, transformation video and performance ads.',
      },
    ],
    gateLabel: 'Checkpoint',
    milestonesTitle: 'Stage milestones',
    milestones: [
      'Direction and shadow movement shown on video and measured',
      'Import and service process confirmed',
      'Price accepted in first B2B demos',
      'Profitable sales in at least one channel',
    ],
  },

  terms: {
    eyebrow: 'Terms and transparency',
    headline: '$90,000 goes into the company. Equity is negotiated separately.',
    subhead:
      'The aim is for a third partner to invest capital into a new company. This document does not set equity or valuation in advance.',
    equityTitle: 'Example, not an offer',
    equityColumns: ['Investor stake', 'Post-money', 'Pre-money'],
    equityRows: [
      ['15%', '$600K', '$510K'],
      ['20%', '$450K', '$360K'],
      ['25%', '$360K', '$270K'],
    ],
    rolesTitle: 'Responsibilities',
    roles: [
      { who: 'Founder', title: 'Product & supply', text: 'Manufacturer, quality, logistics, sales operations.' },
      {
        who: 'Founder',
        title: 'Growth & technology',
        text: 'Market research, product management, e-commerce / CRM, creative production and ads.',
      },
      { who: 'Investor', title: 'Capital', text: 'Capital, plus management support if agreed.' },
    ],
    foundersTitle: 'Founder work',
    foundersValue: 'TRY 230,000 to 530,000',
    foundersText:
      'The research, modelling, brand and digital infrastructure work taken on by the founders has an estimated market value of TRY 230,000 to 530,000 (excl. VAT). This amount is not counted as cash capital.',
  },

  makers: {
    eyebrow: 'Shortlisted manufacturers',
    headline: 'Three candidates. The sample test decides.',
    linkLabel: 'Manufacturer’s page',
    cards: [
      {
        name: 'Pesetech',
        city: 'Shenzhen',
        text: '60x60 cm 80W model. Direct retail from its own site, a distributor programme and a 5-year warranty.',
        url: 'https://www.artificialsky.tech/shop/skylight-80w/',
      },
      {
        name: 'Ewinlight',
        city: 'Shenzhen',
        text: 'Ewindow series. A B2B manufacturer focused on architectural projects; panels can be tiled together. Exhibitor at Light+Building Frankfurt.',
        url: 'https://ewinlight.com/ewindow/',
      },
      {
        name: 'BBier Lighting',
        city: 'Shenzhen',
        text: 'OEM manufacturer for 14 years. Low minimum orders, flexible for own-brand production.',
        url: 'https://bbiermfg.en.made-in-china.com/product/pAGRSdTyhlrj/China-Blue-Sky-LED-Skylight-Ceiling-Virtual-Natural-Sunlight-LED-Simulator-Artificial-Skylight.html',
      },
    ],
    note: 'Samples and quotes will be run with these manufacturers, and the final choice will follow the sample tests.',
  },

  next: {
    eyebrow: 'Next step',
    line: 'Samples and quotes, testing and supplier selection, investment agreement.',
    stepsLabel: 'The next three steps',
    steps: ['Samples and quotes', 'Testing and supplier selection', 'Investment agreement'],
  },

  footer: {
    text: 'Investor presentation, October 2026. Preliminary and confidential. Financial projections are not binding.',
  },
};
