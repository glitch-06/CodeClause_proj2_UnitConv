const millimeter = document.getElementById('Millimeter')
const centimeter = document.getElementById('Centimeter')
const meter = document.getElementById('Meter')
const kilometer = document.getElementById('Kilometer')
const feet = document.getElementById('Feet')
const inch = document.getElementById('Inch')

const emptyAllfields = () =>{
    millimeter.value=centimeter.value=meter.value=kilometer.value=mile.vale=yard.value=feet.value=inch.value=""
}
millimeter.addEventListener('input',function(){
    inputValue = millimeter.value
    if (inputValue=="") {
        emptyAllfields()
    }
    else{
        centimeter.value=inputValue/10
        meter.value=inputValue/1000
        kilometer.value=inputValue/Math.pow(10,6)
        feet.value=inputValue/305
        inch.value=inputValue/25.4
    }
})
centimeter.addEventListener('input',function(){
    inputValue = centimeter.value
    if (inputValue=="") {
        emptyAllfields()
    }
    else{
        millimeter.value=inputValue*10
        meter.value=inputValue/100
        kilometer.value=inputValue/Math.pow(10,5)
        feet.value=inputValue/30.48
        inch.value=inputValue/2.54
    }
})
meter.addEventListener('input',function(){
    inputValue = meter.value
    if (inputValue=="") {
        emptyAllfields()
    }
    else{
        millimeter.value=inputValue*1000
        centimeter.value=inputValue*100
        kilometer.value=inputValue/1000
        feet.value=inputValue*3.281
        inch.value=inputValue*39.37
    }
})
kilometer.addEventListener('input',function(){
    inputValue = kilometer.value
    if (inputValue=="") {
        emptyAllfields()
    }
    else{
        millimeter.value=inputValue*Math.pow(10,6)
        centimeter.value=inputValue*Math.pow(10,5)
        meter.value=inputValue*1000
        feet.value=inputValue*3280.84
        inch.value=inputValue*39370
    }
})
feet.addEventListener('input',function(){
    inputValue = feet.value
    if (inputValue=="") {
        emptyAllfields()
    }
    else{
        millimeter.value=inputValue*304.8
        centimeter.value=inputValue*30.48
        meter.value=inputValue/3.281
        kilometer.value=inputValue/3281
        inch.value=inputValue*12
    }
})
inch.addEventListener('input',function(){
    inputValue = inch.value
    if (inputValue=="") {
        emptyAllfields()
    }
    else{
        millimeter.value=inputValue*25.4
        centimeter.value=inputValue*2.54
        meter.value=inputValue/39.37
        kilometer.value=inputValue/3937;
        feet.value=inputValue*12
    }
})
