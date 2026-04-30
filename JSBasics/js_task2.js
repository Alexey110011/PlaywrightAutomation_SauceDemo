function trafficLight() {
    let color = prompt("TrafficLight - Which color is on traffic light now?")
    if(color == 'red'){
        alert ("Stop")
    } else if (color =="yellow"){
        alert ("Attention!")
    } else if (color ==" green") {
        alert ("Go1 Go!Go!")
    } else {
        alert ("I don't want to cross the street")
    }
}
trafficLight()

function trafficLightTern(){
    let color = prompt("TrafficLightTern - Which color is on traffic light now?")
    alert((color == "red")?"Stop":
    (color == "yellow")?"Attention!":
    (color =="green")?"Go!Go!Go!":
    "I don't want to cross the street")
}
trafficLightTern()

function trafficLightSwitch() {
    let color = prompt("TrafficLightSwitch - Which color is on traffic light now?")
    switch(color){
    case "red":
        alert ("Stop")
        break
    case "yellow":
        alert ("Attention!")
        break
    case "green":
        alert ("Go1 Go!Go!")
        break
    default:
        alert ("I don't want to cross the street")
    }
}
trafficLightSwitch()