var assert = require('assert');
var markdown_meta = require('../lib/index');

var validMetadata = "<!--*id: 1; \
              author: chunli; \
              title : This is a test; \
              tag : ['test','nodejs']*-->";

var result = markdown_meta.parse(validMetadata);

var obj = {
    id : 1,
    author : 'chunli',
    title : "This is a test",
    tag : ['test', 'nodejs']
};

assert.deepEqual(result, obj, "valid metadata didn't pass");

var emptyMetadata = "";
result = markdown_meta.parse(emptyMetadata);
obj = {};
assert.deepEqual(result, obj, "empty metadata didn't pass");
