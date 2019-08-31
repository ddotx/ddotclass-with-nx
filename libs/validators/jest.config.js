module.exports = {
  name: 'validators',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/validators',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
