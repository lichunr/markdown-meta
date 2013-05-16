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
obj1 = {};
assert.deepEqual(result, obj1, "empty metadata didn't pass");

var toMarkdown = markdown_meta.toMarkdown(obj);
var revertBack = markdown_meta.parse(toMarkdown);

assert.deepEqual(revertBack, obj, "revert back didn't pass");
