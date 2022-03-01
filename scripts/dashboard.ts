import { writeFileSync } from 'node:fs';

interface Project {
  name: string;
  org?: string;
  status: string;
}

const projects: Project[] = [
  {
    name: '@prettier/plugin-pug',
    org: 'prettier',
    status: 'Author & Maintainer',
  },
  {
    name: 'eslint-plugin-vue-pug-sfc',
    status: 'Author & Maintainer',
  },
  {
    name: 'eslint-define-config',
    status: 'Author & Maintainer',
  },
  {
    name: 'vite-plugin-time-reporter',
    status: 'Author & Maintainer',
  },
  {
    name: 'vite-plugin-ts-nameof',
    status: 'Author & Maintainer',
  },
  {
    name: '@gtm-support/core',
    org: 'gtm-support',
    status: 'Maintainer',
  },
  {
    name: '@gtm-support/vue-gtm',
    org: 'gtm-support',
    status: 'Maintainer',
  },
  {
    name: 'vite',
    org: 'vitejs',
    status: 'Core Team Member',
  },
  {
    name: '@faker-js/faker',
    org: 'faker-js',
    status: 'Maintainer',
  },
];

let content = '# Dashboard';

content += `
<table width="100%">
  <thead>
    <tr>
      <th>Project</th>
      <th>Status</th>
      <th>Version</th>
      <th>Downloads</th>
      <th>Stars</th>
      <th>Open Issues</th>
      <th>Open PRs</th>
    </tr>
  </thead>
  <tbody>`;

for (const project of projects) {
  const linkInfix = `${project.org ?? 'Shinigami92'}/${
    project.name.startsWith('@') ? project.name.split('/')[1] : project.name
  }`;
  const repoLink = `https://github.com/${linkInfix}`;

  content +=
    `
    <tr>` +
    // Project
    `
      <td>
        <a href="${repoLink}" target="_blank">${project.name}</a>
      </td>` +
    // Status
    `
      <td>${project.status}</td>` +
    // Version
    `
      <td>
        <a href="https://www.npmjs.com/package/${project.name}" target="_blank">
          <img alt="NPM package" src="https://img.shields.io/npm/v/${project.name}.svg?style=flat-square">
        </a>
      </td>` +
    // Downloads
    `
      <td>
        <a href="https://www.npmjs.com/package/${project.name}" target="_blank">
          <img alt="NPM package" src="https://img.shields.io/npm/dw/${project.name}?style=flat-square">
        </a>
      </td>` +
    // Stars
    `
      <td>
        <a href="${repoLink}" target="_blank">
          <img alt="Stars" src="https://img.shields.io/github/stars/${linkInfix}?style=flat-square">
        </a>
      </td>` +
    // Open Issues
    `
      <td>
        <a href="${repoLink}/issues" target="_blank">
          <img alt="Open Issues" src="https://img.shields.io/github/issues/${linkInfix}?style=flat-square">
        </a>
      </td>` +
    // Open PRs
    `
      <td>
        <a href="${repoLink}/pulls" target="_blank">
          <img alt="Open PRs" src="https://img.shields.io/github/issues-pr/${linkInfix}?style=flat-square">
        </a>
      </td>
    </tr>`;
}

content += `
  </tbody>
</table>
`;

writeFileSync('DASHBOARD.md', content, {
  encoding: 'utf8',
});
