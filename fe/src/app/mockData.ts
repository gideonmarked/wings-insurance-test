// src/app/mockData.ts
export const quoteSections = [
  {
    stepTitle: 'Step 1 - Named Insured information',
    status: 'Complete',
    statusColor: 'green',
    items: [
      { name: 'John Doe', status: 'Updated' },
      { name: 'Jane Smith', status: 'Pending information' }
    ],
    icon: 'shield-user'
  },
  {
    stepTitle: 'Step 2 - Aircraft information',
    status: 'Complete',
    statusColor: 'green',
    items: [
      { name: 'Cessna 172', status: 'Updated' }
    ],
    icon: 'airplane'
  },
  {
    stepTitle: 'Step 3 - Pilots information',
    status: 'Incomplete',
    statusColor: 'yellow',
    items: [
      { name: 'Pilot A', status: 'Pending information' }
    ],
    icon: 'user'
  }
];
