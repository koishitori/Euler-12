var prime = [ 1 ,2 ];
var num = 100;
for( var i = 3; prime.length <= num; i++){
  var flag = 1;
  for( var j= 1; i >= prime[ j ] * prime[ j ]; j++ )
    if( i % prime[ j ] == 0 ){
      flag = 0;
      break;
    }
  if(flag)
    prime.push( i );
}
function divisors(num){
  var output = 1;
  for( var i = 1; i < prime.length; i++)
    if( num % prime[ i ] == 0 ){
      var temp = num;
      var log = 1;
      for( ; temp /= prime[ i ]; log++)
        if( temp % prime[ i ] )
          break;
      output *= ( log + 1 );
    }
  return output - 1;
}

var ans=0;
for(var i = 1; 1; i++){
  ans += i;
  if(divisors(ans) > 500){
    console.log(divisors(ans)+":"+ans);
    break;
  }
}
