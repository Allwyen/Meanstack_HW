const _=require("lodash");

var array = ["Allwyen","Allwyen","Allwyen",222,222,333,333,123,213,123,2,3,3,4];

var array2= [[1,2,3],[3,4]];

var cats = [{ name: 'fuzzy', color: 'orange', age: 12 },
{ name: 'tiny', color: 'red', age: 7 },
{ name: 'grumpy', color: 'white', age: 5 } ]

var fiarray=_.first(array,3);
console.log(fiarray);

var farray=_.flatten(array2)
console.log(farray);

var filterarray=_.filter(cats, function getYoungerCats(cat){
    return (cat.age < 10);
    });
console.log(filterarray);

var erray=_.extend({ type: 'ball', color: 'blue' }, { name: 'bob', color: 'red' });
console.log(erray);

var array = [ 0, 1, 0, 2, false, true ];
var carray=_.compact(array);
console.log(carray);