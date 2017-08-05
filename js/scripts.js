
var text = ('Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.')
var dinosaur = ('triceratops')
var dinosaurUpperCased = dinosaur.toUpperCase()

var textReplaced = text.replace('Velociraptor', dinosaurUpperCased);

console.log(textReplaced);

console.log(textReplaced.length);

var partOftextReplaced = textReplaced.slice (0,72);
console.log (partOftextReplaced);