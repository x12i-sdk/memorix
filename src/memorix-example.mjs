import assert from 'node:assert/strict';
import { memorixEntityCollectionName, assertMemorixCollectionName, memorixScopedNamespaceMatchFilter } from '@x12i/memorix';
const collection = memorixEntityCollectionName('assets', 'analysis');
assert.equal(collection, 'assets-analysis');
assert.equal(assertMemorixCollectionName(collection), collection);
assert.throws(() => assertMemorixCollectionName('_reserved'));
const filter = memorixScopedNamespaceMatchFilter('fixture-namespace', ['metadata.namespace']);
assert(JSON.stringify(filter).includes('fixture-namespace'));
console.log({ collection, filter });
// This prepares a query address and filter; it does not read MongoDB or confer authorization.
