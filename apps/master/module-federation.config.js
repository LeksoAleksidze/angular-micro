module.exports = {
  name: 'master',
  exposes: {
    './Module': 'apps/master/src/app/remote-entry/entry.module.ts',
  },
};
