/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
        return "Hello world"; 
    }
};

console.log (createHelloWorld);

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */