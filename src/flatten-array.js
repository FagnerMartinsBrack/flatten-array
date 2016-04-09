var flattenArray = function( input, result ) {
  var item;
  var result = result || [];

  if ( !Array.isArray(input) ) {
    return result;
  }

  var inputLength = input ? input.length : 0;
  if ( !inputLength ) {
    return result;
  }

  var index = -1;

  while ( ++index < inputLength ) {
    item = input[ index ];
    if ( Array.isArray(item) ) {
      flattenArray( item, result );
      continue;
    }
    result.push( item );
  }
  return result;
};

module.exports = flattenArray;