// Fixture package. The published build records which ref produced it, so the
// attestation and the tarball can be compared against the run that made them.
module.exports = {
  builtFromRef: process.env.FIXTURE_BUILT_FROM_REF || 'unset',
};
