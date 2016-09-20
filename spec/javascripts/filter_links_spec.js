describe('filter links by title and url', function () {

  it('should return -1 if text not found', function () {
    text = "Test this"
    query = "Return minus one"

    output = containsText(text, query)
    assert.equal(-1, output);
  });

  it('should return index integer if text found', function () {
    text = "Test this"
    query = "T"

    output = containsText(text, query)
    assert.equal(0, output);
  });
});
