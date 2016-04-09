var flattenArray = function( input, result ) {
  var item;
  var result = result || [];
  var inputLength = input.length || 0;
  var index = -1;
  if ( !inputLength ) {
    return result;
  }
  while ( ++index < inputLength ) {
    item = input[ index ];
    if ( item.length ) {
      flattenArray( item, result );
    } else {
      result.push( item );
    }
  }
  return result;
};

module.exports = flattenArray;