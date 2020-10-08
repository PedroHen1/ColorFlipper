var color = ["#f2f2f2", "#80bfff", "#ff7733", "#53ff1a", "#80002a", "#00264d", "#ffff00", "#80ffbf", "#666699", "#996600", "#800000", "#008080", "#e6ff99", "#aa00ff", "#7a7a52", "#004d00", "#303030", "#eb7a34", "#34dceb", "#c9bf7d", "#4ceb34", "#23261f", "#475461", "#2e202c", "#000c24", "#999999", "#ff8cf7", "#f6ff96", "#0d0d0d", "#705a6b", "#705e5a", "#273630",]
var i = 0;
document.querySelector('button').addEventListener('click' , function() {
    i = i < color.length ? ++i : 0;
    document.querySelector('body').style.background = color[i]
})