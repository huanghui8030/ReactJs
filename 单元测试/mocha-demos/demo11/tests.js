describe('DOM tests - div element', function() {
    $("body").append("<div id='thingy'>hello world</div>")
    $('#thingy').attr('class', 'thingy');
    $('#thingy').click(function() { alert( "I've been clicked!" );


    it('should have called alert function', function () {
      var _savedAlert = window.alert; 

      try {
        var spy = sinon.spy(window, 'alert');
        $('#thingy').trigger('click');
        sinon.assert.called(spy);
       } 
      finally { window.alert = _savedAlert; }
    });
 });