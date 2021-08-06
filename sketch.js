var a=prompt("ENTER a number")
var b=prompt("ENTER second number")


function setup() {
  createCanvas(400, 400);


  var butn=createButton("Click to Swap ")
  butn.mousePressed(swap)
}

function draw() {
  background(220);
}


function swap()
{
  [a,b]=[b,a]

  console.log("A after swap",+a)
  console.log("B after swap",+b)


}