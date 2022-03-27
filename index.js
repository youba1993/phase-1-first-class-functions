function receivesAFunction(calB){
     return calB()
}
function returnsANamedFunction(){
      return function dontStop(){};
}

function returnsAnAnonymousFunction(){
    return () => {}
};


