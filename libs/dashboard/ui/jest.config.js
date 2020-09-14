module.exports = {
  name: 'dashboard-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/dashboard/ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
