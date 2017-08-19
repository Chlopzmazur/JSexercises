function Button(text) {
	this.text = text || "Hello";
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.appendTo($('body'));
		this.$element.click(function() {
		alert(self.text);
	});
	}
}

var btn1 = new Button('Howdy!');
var btn2 = new Button('Welcome!');

btn1.create();
btn2.create();