function setup(){
    canvas=createCanvas(500,260);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JvqFeqv-Y/model.json',modelLoaded);
    
}
function modelLoaded(){
    console.log('model loaded!!!!!');
}
function draw(){
    image(video,0,0,500,260);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
        
    }
}
