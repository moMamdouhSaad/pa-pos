module.exports = {
  name: 'dashboard-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/dashboard/feature',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
