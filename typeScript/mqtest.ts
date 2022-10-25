window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};
function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
}

Array.prototype.copyWithin(target, start = 0, end = this.length)