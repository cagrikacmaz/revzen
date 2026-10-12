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
    downloadDeck: 'Download deck',
    downloadDeckPdf: 'Download deck (PDF)',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Message on WhatsApp',
    whatsappMessage: "Hi, I'd like to talk about the Revzen presentation.",
    conceptCaption: 'Concept illustration, not a product photo',
    opensInNewTab: '(opens in a new tab)',
    backToTop: 'Back to top',
  },

  nav: [
    { id: 'product', label: 'Product' },
    { id: 'category', label: 'Category' },
    { id: 'market', label: 'Go-to-market' },
    { id: 'ask', label: 'The ask' },
    { id: 'model', label: 'Model' },
    { id: 'plan', label: '100 days' },
    { id: 'terms', label: 'Terms' },
  ],

  sun: {
    figureLabel: 'Sun clock: cross-section of a room with an artificial window',
    svgTitle: 'Cross-section of a room with an artificial window in the ceiling',
    svgDesc:
      'A beam of light enters through the ceiling window, leaves a patch of light on the floor and casts the shadow of a potted plant. As the time changes, the angle and colour of the light and the direction of the shadow change.',
    sliderLabel: 'Time of day',
    quickLabel: 'Jump to',
    play: 'Play the day',
    modeLegend: 'Compare',
    modeColour: 'Colour-only panel',
    modeDirectional: 'Directional light',
    modeNoteColour: 'The panel changes only its colour and brightness. The light patch and the shadow stay where they are.',
    modeNoteDirectional: 'The angle of the light, its patch on the floor and the direction of the shadow move together through the day.',
    readTime: 'Time',
    readDirection: 'Light direction',
    readLevel: 'Light level',
    readTone: 'Tone',
    dirEast: '{deg}° from the east',
    dirWest: '{deg}° from the west',
    dirOverhead: 'Overhead',
    dirFixed: 'Fixed, overhead',
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
      { value: '1,000 / 10,000', label: 'Units, two scale scenarios' },
      { value: 'Hypothesis', label: 'Financial model to be validated' },
    ],
  },

  why: {
    heading: 'Why Revzen?',
    text: 'Revzen is a word of Persian origin meaning window. In Seljuk and Ottoman architecture it names the windows made of coloured glass set into carved plaster frames, which filtered daylight as it entered a building. Those craftsmen did not simply let light in, they shaped it. We want to bring the same idea, with today’s technology, to spaces that have no window at all.',
  },

  product: {
    eyebrow: 'What we sell',
    headline: 'Not a decorative panel. A sense of the sun moving.',
    thesis:
      'We want to bring daylight that changes direction over time into a windowless room, not just a blue ceiling.',
    statesLabel: 'Three moments of the day',
    stateDirection: 'Direction',
    stateLevel: 'Light level',
    stateTone: 'Tone',
    states: [
      { time: '08:00', minutes: 480, name: 'Morning', direction: 'From the east, at a low angle', level: 'Medium', tone: 'Warm amber' },
      { time: '12:00', minutes: 720, name: 'Noon', direction: 'From overhead, steep', level: 'Highest', tone: 'Neutral white' },
      { time: '17:00', minutes: 1020, name: 'Evening', direction: 'From the west, at a low angle', level: 'Medium', tone: 'Orange' },
    ],
    acceptanceTitle: 'Technical acceptance criterion',
    acceptanceText:
      'The real product will be validated with a sample video and measurements showing that the angle and the light patch physically change through the day. A change in CCT (light colour) or brightness alone does not meet this promise.',
  },

  category: {
    eyebrow: 'Why a separate category',
    headline: 'Competition exists. The difference has to be proven technically.',
    subhead:
      'This is not a claim that “nothing like it exists in Turkey”. It is a hypothesis: a product with real direction and shadow movement can be positioned at a different level.',
    tableCaption: 'Comparison of product classes',
    columns: ['Product class', 'What it offers', 'Directional light', 'Opportunity / limit'],
    rows: [
      { cells: ['Printed sky', 'Image + general lighting', 'Typically no', 'Low price / decorative'], highlight: false },
      { cells: ['Smart LED sky', 'Time, colour, brightness', 'Usually no', 'Easy to access / easy to copy'], highlight: false },
      { cells: ['Premium optical', 'Realistic sun and shadow', 'Yes; the angle may be fixed', 'High optical quality / expensive'], highlight: false },
      { cells: ['Target product', 'Light whose direction changes over time', 'Must be proven with a sample', 'Target difference: moving light'], highlight: true },
    ],
    footnote:
      'CoeLux shows directional light and sharp shadows. Innerscene Virtual Sun shows depth and a sun illusion; the Innerscene FAQ states a fixed 30° angle for some models.',
  },

  market: {
    eyebrow: 'Go-to-market',
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
    note: 'The US and Amazon are not a priority in phase one. They become the second market once certification, logistics and real net margin are validated.',
  },

  progress: {
    eyebrow: 'Work to date',
    headline: 'Not starting from zero. But the product is not yet validated.',
    doneTitle: 'Existing work / in-kind contribution',
    doneStatus: 'Done',
    done: [
      { item: 'Market and competitor map', status: 'Done, preliminary' },
      { item: 'Turkey / US pricing and import analysis', status: 'Done, open to confirmation' },
      { item: 'Supplier shortlist and risk matrix', status: 'Done, first pass' },
      { item: 'Unit economics + investment model', status: 'Done, assumption-based' },
    ],
    nextTitle: 'Post-investment execution',
    nextStatus: 'Not started',
    next: [
      'Product direction / optical sample validation',
      'E-commerce, CRM and quoting infrastructure',
      'Brand, launch film and ads',
      'Sales, after-sales and reporting',
    ],
    rangeValue: 'TRY 230,000 to 530,000',
    rangeText:
      'Our earlier estimate for the total initial set-up services to be bought in from outside (excl. VAT). Not all of this work is complete, and it is not counted as cash capital or as money spent to date.',
  },

  ask: {
    eyebrow: 'The ask',
    headline: '$90,000. One clear plan.',
    subhead:
      'The goal is not to buy 1,000 units. It is to get the product technically approved, enter the market with initial stock and start generating sales data.',
    chartTitle: 'Use of funds (USD)',
    bars: [
      { label: 'Initial stock / import, excl. VAT', value: 33000, display: '$33,000' },
      { label: 'Optical validation, samples', value: 11000, display: '$11,000' },
      { label: 'Import VAT cash buffer', value: 11000, display: '$11,000' },
      { label: 'First performance campaigns', value: 10000, display: '$10,000' },
      { label: 'Testing, compliance, advisory', value: 8000, display: '$8,000' },
      { label: 'E-commerce / CRM launch', value: 6000, display: '$6,000' },
      { label: 'Reserve / contingency', value: 6000, display: '$6,000' },
      { label: 'Reference installation and demo', value: 5000, display: '$5,000' },
    ],
    totalLabel: 'Total',
    totalDisplay: '$90,000',
    note: 'First batch ≈ 60-70 units (assumed landed cost ≈ $480/unit). The actual quantity will be set once supplier quotes and customs are confirmed.',
  },

  model: {
    eyebrow: 'Financial model, 1,000 units',
    headline: 'Profitability potential at 1,000 units.',
    subhead: 'Assumptions for the same 12-month sales period. Prices exclude VAT; installation is priced separately.',
    metrics: [
      { label: 'Revenue', value: '$1,070,000', note: '1,000 × avg. $1,070' },
      { label: 'Contribution', value: '$350,000', note: 'Before fixed costs' },
      { label: 'Operating result', value: '$185,000', note: 'Before tax, financing and depreciation' },
    ],
    unitTableCaption: 'Per unit, excl. VAT',
    unitColumns: ['', 'B2B 60%', 'Direct 40%', 'Weighted'],
    unitRows: [
      ['Sales price', '$1,150', '$950', '$1,070'],
      ['Contribution after product, channel, service', '$490', '$140', '$350'],
    ],
    bridgeTitle: 'Unit contribution bridge',
    bridge: [
      { label: 'Sales price', value: 1070, display: '$1,070', kind: 'total' },
      { label: 'Product / import', value: -480, display: '−$480', kind: 'step' },
      { label: 'Sales channel & ads', value: -170, display: '−$170', kind: 'step' },
      { label: 'Warranty / service', value: -70, display: '−$70', kind: 'step' },
      { label: 'Contribution', value: 350, display: '$350', kind: 'result' },
    ],
    bridgeSum: [
      { text: '1,000 × $350 = $350,000', kind: 'plain' },
      { text: '−$165,000 annual fixed overhead', kind: 'minus' },
      { text: '= $185,000', kind: 'result' },
    ],
  },

  scale: {
    eyebrow: 'Scale scenario, 10,000 units',
    headline: '10,000 units: a big opportunity, a big operation.',
    subhead: 'A one-year scale scenario, not a commitment. It assumes a lower unit price and higher operating costs.',
    metrics: [
      { label: 'Revenue', value: '$10,000,000', note: '10,000 × avg. $1,000' },
      { label: 'Contribution', value: '$3,400,000', note: 'Before fixed costs' },
      { label: 'Operating result', value: '$2,150,000', note: 'Before tax, financing and depreciation' },
    ],
    bridgeTitle: 'Unit contribution bridge',
    bridge: [
      { label: 'Avg. price', value: 1000, display: '$1,000', kind: 'total' },
      { label: 'Landed cost', value: -420, display: '−$420', kind: 'step' },
      { label: 'Channel + ads', value: -160, display: '−$160', kind: 'step' },
      { label: 'Warranty / service', value: -80, display: '−$80', kind: 'step' },
      { label: 'Unit contribution', value: 340, display: '$340', kind: 'result' },
    ],
    bridgeSum: [
      { text: '10,000 × $340 = $3.40M contribution', kind: 'plain' },
      { text: '−$1.25M fixed operations', kind: 'minus' },
      { text: '= $2.15M', kind: 'result' },
    ],
    capitalTitle: 'Capital reality',
    capitalText:
      '10,000 units at $420 landed cost means ≈ $4.2M of procurement. $90,000 of seed capital cannot fund that alone. It needs revolving stock, customer deposits, a distributor and/or credit.',
  },

  stress: {
    eyebrow: 'Stress test',
    headline: 'Size alone is not enough. Margin has to hold.',
    tableCaption: 'Operating result in three cases',
    columns: ['Case', '1,000 units', '10,000 units', 'Assumption'],
    rows: [
      { cells: ['Downside', '−$71,500', '−$190,000', 'Price −15%; product cost +20%'], tone: 'negative' },
      { cells: ['Base', '$185,000', '$2,150,000', 'Base price and cost'], tone: 'base' },
      { cells: ['Upside', '$340,000', '$3,570,000', 'Price +10%; product cost −10%'], tone: 'positive' },
    ],
  },

  calc: {
    title: 'Scenario calculator',
    intro: 'Test the assumptions yourself. Base values fill in from the selected scenario.',
    scenarioLegend: 'Scenario',
    scenario1000: '1,000 units',
    scenario10000: '10,000 units',
    inputsLegend: 'Assumptions (USD, excl. VAT)',
    units: 'Units',
    price: 'Average sales price',
    landed: 'Product / landed cost',
    channel: 'Channel & ads per unit',
    service: 'Warranty & service per unit',
    fixed: 'Annual fixed costs',
    deviationLegend: 'Deviations',
    priceDev: 'Price deviation',
    costDev: 'Product cost deviation',
    costDevHint: 'Applies to product / landed cost only.',
    presetsLabel: 'Presets',
    presets: { downside: 'Downside', base: 'Base', upside: 'Upside' },
    resultsLabel: 'Results',
    revenue: 'Revenue',
    contribution: 'Contribution',
    operatingResult: 'Operating result',
    unitContribution: 'Unit contribution',
    breakEven: 'Break-even units',
    noBreakEven: 'No break-even',
    unitsSuffix: 'units',
    percent: '{n}%',
    formula: 'Unit contribution = price × (1 + price deviation) − landed cost × (1 + cost deviation) − channel − service',
    note: 'The calculator is a simplified version of the deck model. Tax, financing and VAT cash effects are not included.',
  },

  costs: {
    eyebrow: 'Cost structure',
    headline: 'From revenue to operating result. Every line visible.',
    bridgeTitle: 'Operating bridge',
    fixedTitle: 'Annual fixed budget',
    columns: ['', '1,000 units', '10,000 units'],
    bridgeRows: [
      { cells: ['Revenue', '$1.07M', '$10.0M'], kind: 'plain' },
      { cells: ['Product & import', '−$480K', '−$4.20M'], kind: 'minus' },
      { cells: ['Channel & ads', '−$170K', '−$1.60M'], kind: 'minus' },
      { cells: ['Warranty & service', '−$70K', '−$800K'], kind: 'minus' },
      { cells: ['Contribution', '$350K', '$3.40M'], kind: 'subtotal' },
      { cells: ['After fixed costs', '$185K', '$2.15M'], kind: 'total' },
    ],
    fixedRows: [
      { cells: ['Management / business development', '$40K', '$120K'], kind: 'plain' },
      { cells: ['Core team / operations', '$42K', '$500K'], kind: 'plain' },
      { cells: ['Brand, evergreen content / PR', '$24K', '$120K'], kind: 'plain' },
      { cells: ['Software / data / CRM', '$20K', '$170K'], kind: 'plain' },
      { cells: ['Accounting, legal, office', '$15K', '$110K'], kind: 'plain' },
      { cells: ['Customer and field support', '$24K', '$230K'], kind: 'plain' },
      { cells: ['Total', '$165K', '$1.25M'], kind: 'total' },
    ],
    noteTitle: 'Accounting & partnership separation',
    noteText:
      'Research and business modelling are founder contributions and are not shown as previously paid invoices. Software, content and management costs actually incurred after the investment go into cash flow and the P&L. VAT, corporate tax, financing and capex must be modelled separately.',
  },

  plan: {
    eyebrow: '100-day plan',
    headline: 'Proof first. Then sales the investment accelerates.',
    subhead: 'Capital is deployed in stages. If technical acceptance fails, the order is not scaled up.',
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
    gateLabel: 'Go / no-go gate',
    criteriaTitle: 'Go / no-go criteria',
    criteria: [
      'Is real direction / shadow movement verified by video and measurement?',
      'Can the product be imported and serviced?',
      'Is there price acceptance from the first B2B demo?',
      'Has positive unit contribution been achieved in at least one channel?',
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
    limitsTitle: 'Limits of our claims',
    limitsText:
      'The optical direction change of current products, OEM prices, exclusivity in Turkey, certifications and the sales price are not verified. The tables rest on a hypothetical model and do not replace independent expert, legal, customs or financial advice.',
  },

  makers: {
    eyebrow: 'Candidate manufacturers',
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
    note: 'These manufacturers’ pages describe colour and brightness changing through the day; none of them explicitly states that the direction of the sun physically moves. The choice will depend on the sample test in days 0-30. Prices on their sites are list prices.',
  },

  next: {
    eyebrow: 'Next step',
    line: 'Sample and supplier quote, validation, investment agreement.',
    stepsLabel: 'The next three steps',
    steps: ['Sample and supplier quote', 'Validation', 'Investment agreement'],
  },

  footer: {
    text: 'Investor presentation, October 2026. Preliminary and confidential. Financial projections are not binding.',
  },
};
