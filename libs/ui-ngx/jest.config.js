module.exports = {
  name: 'ui-ngx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-ngx',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
