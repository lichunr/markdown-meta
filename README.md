markdown-meta
=============

read metadata from markdown files

Installation
=============

Just the `markdown-meta` library:

    npm install markdown-meta

Optionally, install `markdown-meta` into your path

    npm install -g markdown-meta

Usage
=====

Use `<!--*` and `*-->` tags in the markdown files to include the metadata.

Inside the backend code:
    var markdown_meta = require('markdown-meta');
    var content = "<!--* author: chun *-->";
    var metadata = markdown_meta.parse(content);

Inside the client code:
    <script type='type/javascript' src='markdown-meta.js'></script>
    <script type='type/javascript'>
        var content = "<!--* author: chun *-->";
        var metadata = markdown_meta.parse(content);
    </script>

the `metadata` will be a Javascript Object.

Metadata Format
===============

*key*: *value*;

Please use the `:` to separate the key and value, use `;` to separate different key-value pairs.

Example
=======
    <!--*
        author: chun;
        title : Welcome to use markdown-meta;
        tags  : ["markdown", "metadata"];
    *-->
