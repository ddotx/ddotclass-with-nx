module.exports = {
  name: 'ui-navbar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-navbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
