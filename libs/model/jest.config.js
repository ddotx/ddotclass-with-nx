module.exports = {
  name: 'model',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/model',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
