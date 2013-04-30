
var META_START = "<!--*";
var META_END   = "*-->";
var META_SEPARATOR = ";";
var KEY_VALUE_SEPARATOR = ":";

(function(expose) {
expose.parse = function (content) {
    var plainMetadatas = parseMetadata(content).split(META_SEPARATOR);
    var metadatas = {};
    for (var i in plainMetadatas) {
        var meta = plainMetadatas[i];
        var pairs = meta.trim().split(KEY_VALUE_SEPARATOR);
        if (pairs.length != 2) {
            continue;
        }
        var key = pairs[0].trim();
        //replace ' to " so JSON.parse can correct parse the string
        var value = pairs[1].trim().replace(/'/g, '"');
        try {
            //parse Array and Object
            metadatas[key] = JSON.parse(value);
        } catch (e) {
            metadatas[key] = value;
        }
    };
    return metadatas;
};

function parseMetadata(content) {
    var start = content.indexOf(META_START) + META_START.length;
    var end   = content.indexOf(META_END, start);
   
    var metadata = content.substring(start, end).trim();
    return metadata;
}

}) ( (function() {
    if ( typeof exports === "undefined" ) {
        window.markdown_meta = {};
        return window.markdown_meta;
    }
    else {
        return exports;
    }
})() );
