 function receivesAFunction(callback) {
    callback();
  }

  
function returnsANamedFunction(){
    return function namedFunc(){};
}


const returnsAnAnonymousFunction= function(){
    return function(){}

}