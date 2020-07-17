module.exports = {
  name: 'pos',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pos',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
