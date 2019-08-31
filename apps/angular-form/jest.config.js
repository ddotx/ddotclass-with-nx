module.exports = {
  name: 'angular-form',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
