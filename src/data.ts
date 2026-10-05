// Services, systems and sectors. Used on the home page and their own pages.

export const services = [
  {
    id: 'software',
    title: 'Control strategy and software',
    summary: 'Control strategies and controller software written to the M&E design, with graphics that operators can use.',
    points: [
      'Control strategy and sequence of operations from the M&E design',
      'Controller programming and point schedules',
      'Front-end graphics and alarm set-up',
      // TODO(Dan): add or remove anything here
    ],
  },
  {
    id: 'panels',
    title: 'Control panel design',
    summary: 'Panel drawings and wiring diagrams that a panel builder can build from and an electrician can wire from.',
    points: [
      'Panel general arrangement and wiring diagrams',
      'Field wiring and cable schedules',
      'As-fitted drawings at handover',
    ],
  },
  {
    id: 'commissioning',
    title: 'Commissioning and testing',
    summary: 'Point-to-point testing, functional testing and handover documentation, carried out on site by the engineer who knows the software.',
    points: [
      'Point-to-point and functional testing',
      'Witness testing with the M&E contractor and client',
      'O&M information and handover documents',
    ],
  },
  {
    id: 'support',
    title: 'Maintenance and support',
    summary: 'Planned maintenance, fault finding and changes to existing systems, on site or remotely.',
    points: [
      'Planned maintenance visits',
      'Fault finding and call-outs',
      'Upgrades and changes to existing BMS installations',
    ],
  },
];

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

// Home page: commercial BMS services
export const commercial = [
  { title: 'BMS design & installation', summary: 'Control panels, outstations, field devices and head-end software for new builds and fit-outs.' },
  { title: 'HVAC controls', summary: "Boilers, chillers, AHUs and VRF systems tuned to run only when and where they're needed." },
  { title: 'Upgrades & migrations', summary: 'Replacing obsolete controllers and graphics without stripping out working infrastructure.' },
  { title: 'Energy metering & monitoring', summary: "Sub-metering and dashboards that show where energy is going and what's changed." },
  { title: 'Service & maintenance', summary: 'Planned maintenance contracts, reactive call-outs and remote alarm handling.' },
  { title: 'Integration', summary: 'Bringing lighting, metering and third-party plant onto one open-protocol front end.' },
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
    title: 'Cinema & multi-room audio',
    summary: 'Dedicated cinema rooms and discreet audio throughout the house and garden.',
    icon: 'M4 5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM8 21h8',
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
