module.exports = {
  name: 'af-bootstrap',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/af-bootstrap',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
