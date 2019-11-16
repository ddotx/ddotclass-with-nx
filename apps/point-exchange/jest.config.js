module.exports = {
  name: 'point-exchange',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/point-exchange',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
