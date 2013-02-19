var couchmodel = require('couchmodel'),
    assert = require('component-assert');
describe(
  'Document',
  function () {
    it(
      'should generate a valid url',
      function () {
        var _Document,
            doc;
        _Document = couchmodel.Document.extend({
          urlRoot: 'myroot'
        });
        doc = new _Document({
          _id: 'myid'
        });
        assert(doc.url() === 'myroot/myid');
      }
    );
  }
);
describe(
  'Rows',
  function () {
    it(
      'should generate a valid record',
      function () {
        var _Rows,
            rows,
            data;
        data = {
          rows: [
            {
              value: {
                _id: 'record-1',
                v: 42
              }
            }
          ]
        };
        rows = new couchmodel.Rows(couchmodel._parse(data));
        rows.forEach(
          function (r) {
            assert(r.get('v') === 42);
          }
        );
      }
    );
  }
);
