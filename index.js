const intformat = require('biguint-format');
const FlakeId = require('flake-idgen');
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const datacenter = core.getInput('datacenter');
  const worker = core.getInput('worker');
  const genID = core.getInput('id');
  const epoch = core.getInput('epoch');
  var flakeIdGen = new FlakeId({ datacenter: datacenter, worker: worker, id: genID, epoch: epoch });
  const ID = intformat(flakeIdGen1.next(), 'dec');
  const time = (new Date()).toTimeString();
  core.setOutput("id", ID);
} catch (error) {
  core.setFailed(error.message);
}