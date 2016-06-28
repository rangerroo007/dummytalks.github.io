<script language="JavaScript1.2">

var howOften = 5; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<a href='http://www.jonathanphotos.com/Pictures/Australasia%20n%20Oceania%20web/New%20Zealand%20web/Hobbiton/Shire%20Hill%20Panorama%20in%20Spring%20web%201400%20n%2072.jpg' ><img alt='image0 (9K)' src=' /Images/image0.jpg' height='300' width='300' border='0' /></a>"; //a linked image
    items[1]="<a href='http://2.bp.blogspot.com/-5fpZ0K6Nyyw/Tuic9EDK4sI/AAAAAAAABjc/dT6rzTLI6mI/s1600/n15.jpg'><img alt='image1 (9K)' src='/Images/image1.jpg' height='300' width='300' border='0' /></a>"; //a linked image
function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
        if(document.all)
            placeholderdiv.innerHTML=items[current];

    current = (current==items.length-1) ? 0 : current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;
//-->
</script>