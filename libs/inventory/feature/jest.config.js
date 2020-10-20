module.exports = {
  name: 'inventory-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/inventory/feature',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
