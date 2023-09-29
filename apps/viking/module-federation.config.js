module.exports = {
  name: 'viking',
  exposes: {
    './Module': 'apps/viking/src/app/remote-entry/entry.module.ts',
  },
};
