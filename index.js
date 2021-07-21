function receivesAFunction(callback) {
    callback();
}
receivesAFunction (function(){return })



// function returnsANamedFunction(thing) {
//      return (thing);
// }

// returnsANamedFunction(function newFunction() {return 'store in the thing'});




function returnsANamedFunction (){
    return function newFunction() {}
}

function returnsAnAnonymousFunction () {
    return function() {}
}






// const returnsANamedFunction = thing => thing;
// returnsANamedFunction('hi');

// const newFunction = returnsANamedFunction = dude => dude;
// newFunction; 

