Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

Webcam.attach(' #camera ')

function take_snapShot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById('image_result').innerHTML = "<img id='captured_image' src='"+data_uri+"'/>";
    })
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3S0i5pMPs/model.json", modelLoaded())