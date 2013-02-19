var Backbone = require('backbone'),
    _ = require('underscore');

/**
 * Document is the simple model that uses CouchDB's `_id` as idAttribute.
 */

var Document = Backbone.Model.extend({
  idAttribute: '_id'
});

/*!
 * The _parse function takes a couchdb response object and turns it into it's
 * corresponding value array.
 *
 * @api private
 */

var parse = function (res) {
  return _.map(
    res.rows,
    function (row) {
      return row.value;
    }
  );
};

/**
 * Rows is a collection that wraps a couchdb response of the typical `rows`
 * form.
 */

var Rows = Backbone.Collection.extend({
  model: Document,
  parse: parse
});
exports.Document = Document;
exports.Rows = Rows;
exports._parse = parse;
