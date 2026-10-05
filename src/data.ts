// Services, systems and sectors. Used on the home page and their own pages.

// TODO(Dan): confirm which of these you're happy to list publicly.
export const systems = [
  { name: 'Trend', note: 'IQ controllers and front ends' },
  { name: 'Tridium Niagara', note: 'JACE and Supervisor' },
  { name: 'Distech Controls', note: '' },
  { name: 'Schneider Electric', note: 'EcoStruxure Building Operation' },
  { name: 'EasyIO', note: '' },
  { name: 'Synapsys', note: '' },
];

// Sectors, from the homepage design
export const sectors = ['Offices', 'Education', 'Healthcare', 'Retail & leisure', 'Industrial', 'Public sector'];

// Commercial BMS services: summary on the home page, summary + points on /services/.
// TODO(Dan): check the points; add or remove anything.
export const commercial = [
  {
    id: 'design-install',
    title: 'BMS design & installation',
    summary: 'Control panels, outstations, field devices and head-end software for new builds and fit-outs.',
    points: [
      'Control strategy and sequence of operations from the M&E design',
      'Panel general arrangement and wiring diagrams',
      'Field wiring and cable schedules',
      'Controller programming and points schedules',
      'Front-end graphics and alarm set-up',
    ],
  },
  {
    id: 'hvac',
    title: 'HVAC controls',
    summary: "Boilers, chillers, AHUs and VRF systems tuned to run only when and where they're needed.",
    points: [],
  },
  {
    id: 'commissioning',
    title: 'Commissioning & handover',
    summary: 'Testing and handover carried out on site by the engineer who wrote the software.',
    points: [
      'Point-to-point and functional testing',
      'Witness testing with the M&E contractor and client',
      'O&M information, as-fitted drawings and every login, file and licence handed over',
    ],
  },
  {
    id: 'upgrades',
    title: 'Upgrades & migrations',
    summary: 'Replacing obsolete controllers and graphics without stripping out working infrastructure.',
    points: [
      'Surveys of existing and inherited systems',
      'Phased replacement of obsolete controllers and front ends',
      'Changes and additions to existing BMS installations',
    ],
  },
  {
    id: 'energy',
    title: 'Energy metering & monitoring',
    summary: "Sub-metering and dashboards that show where energy is going and what's changed.",
    points: [],
  },
  {
    id: 'maintenance',
    title: 'Service & maintenance',
    summary: 'Planned maintenance contracts, reactive call-outs and remote alarm handling.',
    points: [
      'Planned maintenance visits',
      'Fault finding and call-outs',
      'Remote monitoring and alarm handling',
    ],
  },
  {
    id: 'integration',
    title: 'Integration',
    summary: 'Bringing lighting, metering and third-party plant onto one open-protocol front end.',
    points: [],
  },
];

// Handover promises behind "Your site. Your system. Your keys." Confirmed by Dan, 2026-10-06.
// `icon` is SVG path data on a 24x24 grid.
export const handover = [
  {
    title: 'Your credentials',
    summary: "Every admin login is handed to you at handover. We don't keep the only set.",
    icon: 'M4 15a4 4 0 1 0 8 0a4 4 0 1 0-8 0M11 12l9-9M17 6l3 3M14.5 8.5l2 2',
  },
  {
    title: 'Your files',
    summary: 'Controller programs, graphics, backups, points schedules and as-fitted drawings.',
    icon: 'M4 4h6l2 2h8v14H4zM9 13h6M9 16h4',
  },
  {
    title: 'Your licences',
    summary: 'Software licences are registered to you, not to DnA.',
    icon: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13l2 2 4-4',
  },
  {
    title: 'Your choice of engineer',
    summary: 'Open protocols like BACnet and Modbus, so any competent engineer can work on your system.',
    icon: 'M6 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M14.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14.5 14.5c.8-.3 1.6-.5 2.5-.5 2.8 0 4 2 4 4.5',
  },
  {
    title: 'Written for engineers',
    summary: 'Plain technical documentation for the people who run the plant, not a sales brochure.',
    icon: 'M4 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z',
  },
];

// Home page: how a commercial job runs
export const steps = [
  { title: 'Site survey', summary: 'We assess existing plant, controls and how the building is actually used.' },
  { title: 'Specification', summary: 'Points schedules, panel drawings and a clear, itemised proposal.' },
  { title: 'Install & commission', summary: 'Panel build, wiring, programming, graphics and full commissioning.' },
  { title: 'Maintain', summary: 'Planned maintenance, remote monitoring and responsive call-outs.' },
];

// Home page: domestic home automation. `icon` is SVG path data on a 24x24 grid.
export const domestic = [
  {
    title: 'Lighting control',
    summary: 'Scenes, circadian lighting and clean keypads in place of banks of switches.',
    icon: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z',
  },
  {
    title: 'Heating & climate',
    summary: 'Room-by-room control of underfloor heating, air conditioning and ventilation.',
    icon: 'M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z',
  },
  {
    title: 'Security & access',
    summary: 'CCTV, gates, door entry and alarms, all viewable from one app.',
    icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  },
  {
    title: 'Whole-home networking',
    summary: 'Enterprise-grade Wi-Fi and cabling, so every system has a solid backbone.',
    icon: 'M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0M12 19.5h.01',
  },
  {
    title: 'Blinds & shading',
    summary: 'Motorised blinds and curtains tied into scenes, time of day and sunlight.',
    icon: 'M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM3 8h18M3 13h18M3 18h18',
  },
];
