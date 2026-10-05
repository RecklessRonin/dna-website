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

// TODO(Dan): confirm sectors
export const sectors = ['Care homes', 'Schools', 'Student accommodation', 'Commercial buildings'];
