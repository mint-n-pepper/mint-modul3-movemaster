radio.onReceivedValue(function (name, value) {
    if (name == "motor") {
        if (value == 1) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, speed)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, speed)
        } else if (value == 2) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, speed)
        } else if (value == 3) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, speed)
        } else if (value == 4) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, speed * 0.8)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, speed * 0.8)
        } else if (value == 0) {
            Kitronik_Move_Motor.stop()
        }
    }
    if (name.includes("led")) {
        moveMotorZIP.setZipLedColor(0, colors[value])
        moveMotorZIP.setZipLedColor(1, colors[value])
        moveMotorZIP.setZipLedColor(2, colors[value])
        moveMotorZIP.setZipLedColor(3, colors[value])
        moveMotorZIP.show()
    }
    if (name == "radiogrp") {
        radiogrp = value
    }
    if (name == "speed") {
        speed = value
    }
})
let radiogrp = 0
let colors: number[] = []
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let speed = 0
radio.setGroup(8)
speed = 50
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
Kitronik_Move_Motor.brakeLightsOff()
// jede LED änderung braucht "show" block, der dann die LEDs entsprechend aktualisiert
moveMotorZIP.show()
colors = [
0,
16711680,
16753920,
16776960,
65280,
255,
4915330,
9055202,
16711935,
16777215,
0
]
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
})
