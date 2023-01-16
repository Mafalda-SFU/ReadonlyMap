const {expect, use} = require('chai');
const {test} = require('mocha');
const {jestSnapshotPlugin} = require('mocha-chai-jest-snapshot');

const ReadonlyMap = require('../index.js');


use(jestSnapshotPlugin());


test('layout', function()
{
  expect(ReadonlyMap).toMatchSnapshot();
})

test('no arguments', function()
{
  function func()
  {
    new ReadonlyMap
  }

  expect(func).to.throw();
})

test('argument', function()
{
  expect(new ReadonlyMap(new Map)).toMatchSnapshot();
})
