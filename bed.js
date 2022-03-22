img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('bed.jpg');
}

function setup()
{
    canvas = createCanvas(500,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    objectDetector.detect(img,gotResults);
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
    objects = results;
}

function draw()
{
    if (status != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object detected";
            document.getElementById("number_of_objects").innerHTML = "There are " + objects.length + " big objects in the image out of which cocossd model has detected " + objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}