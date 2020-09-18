module.exports = {
  name: 'basic-data-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/basic-data/feature',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
