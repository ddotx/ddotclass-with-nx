module.exports = {
  name: 'form-multi',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/form-multi',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
