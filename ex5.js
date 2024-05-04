class ElectroAppliance {
    constructor(name){
        this.name = name;
    }
    plugIn() {
        this.isOn = true
    }
    unplug() {
        this.isOn = false
    }
    getOnOff() {
        if (this.isOn){
            console.log(`${this.name} подключен(а)`)
          } else {
            console.log(`${this.name} отключен(а)`)
          }
    }
  }

class Computer extends ElectroAppliance {
    constructor(freq, coreNum, name){
        super(name)
        this.freq = freq;
        this.coreNum = coreNum;
    }
}

class Lamp extends ElectroAppliance {
    constructor(color, name){
        super(name)
        this.color = color
    }
}


const comp = new Computer(3000, 2, 'Компьютер')
const lamp = new Lamp('white', 'Лампа')
comp.plugIn()
lamp.unplug()
comp.getOnOff()
lamp.getOnOff()