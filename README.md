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
