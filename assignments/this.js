/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global
* 2. Implicit
* 3. New
* 4. Explicit
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2
const implicitObj = {
    show: function(){
        console.log(this);
    },
}
implicitObj.show();
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding