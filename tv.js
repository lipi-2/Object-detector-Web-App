status = "";

function preload()
{
    img = loadImage('tv.jpg');
}

function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    console.log(results);
}