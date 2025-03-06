function setup(){
    
    var cnv = createCanvas(400, 400);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(255, 0, 200);
}

function draw(){

    if (!device) {
        console.error("Das RNBO-Device ist noch nicht initialisiert!");
        return;
    }

    let paramWaveSpeed = device.parametersById.get("waveSpeed");
    if (paramWaveSpeed) {
        // Berechne den neuen Wert basierend auf der Mausposition
        // map() ordnet die Mausposition (von 0 bis width) auf einen Parameterbereich (z.B. 0 bis 1)
        let newValue = map(mouseX, 0, width, 0, 1);  // Werte von 0 bis 1, je nach Mausposition

        // Setze den Parameterwert auf den neuen Wert
        paramWaveSpeed.value = newValue;
    }

    let paramSpeedRandomeAmount = device.parametersById.get("speedRandomeAmount");
    if (paramSpeedRandomeAmount) {
        // Berechne den neuen Wert basierend auf der Mausposition
        // map() ordnet die Mausposition (von 0 bis width) auf einen Parameterbereich (z.B. 0 bis 1)
        let newValue = map(mouseY, 0, height, 0, 1);  // Werte von 0 bis 1, je nach Mausposition

        // Setze den Parameterwert auf den neuen Wert
        paramSpeedRandomeAmount.value = newValue;
    }
    
    background(200);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("WaveSpeed: " + map(mouseX, 0, width, 0, 1), width*0.5, 100);
    text("SpeedRandom: " + map(mouseY, 0, height, 0, 1), width*0.5, 200);

    //cnv.mousePressed(audioResume);
}

function mousePressed(){
    context.resume();
}