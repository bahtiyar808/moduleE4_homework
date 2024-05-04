function ElectroAppliance(name) {
    this.name = name
  }
ElectroAppliance.prototype.plugIn = function(){
  this.isOn = true
}
ElectroAppliance.prototype.unplug = function(){
  this.isOn = false
}
ElectroAppliance.prototype.getOnOff = function(){
    if (this.isOn){
      console.log('электроприбор подключен')
    } else {
      console.log('электроприбор выключен')
    }
  }
function Computer(freq, coreNum){
  this.freq = freq,
  this.coreNum = coreNum
}
Computer.prototype = new ElectroAppliance()
function Lamp(color) {
  this.color = color
}
Lamp.prototype = new ElectroAppliance()
const comp = new Computer(3000, 2)
const lamp = new Lamp('white')
comp.plugIn()
lamp.unplug()
comp.getOnOff()
lamp.getOnOff()

  