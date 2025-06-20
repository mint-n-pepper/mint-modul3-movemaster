input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    singal_Channel += 1
    if (singal_Channel == 1 || lastChannelState == 1) {
        lastChannelState = 0
        singal_Channel = 1
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (singal_Channel == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (singal_Channel == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (singal_Channel == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (singal_Channel == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (singal_Channel == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (singal_Channel == 7) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (singal_Channel == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (singal_Channel == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (singal_Channel == 10) {
        basic.showLeds(`
            # . . # .
            # . # . #
            # . # . #
            # . # . #
            # . . # .
            `)
    } else if (singal_Channel == 11) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            `)
    } else if (singal_Channel == 12) {
        lastChannelState = 1
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    radio.setGroup(singal_Channel)
})
radio.onReceivedValue(function (name, value) {
    if (name == "motor") {
        if (value == 3) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        } else if (value == 1) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, speed)
        } else if (value == 2) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, speed)
        } else if (value == 4) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, speed)
        } else if (value == 0) {
            Kitronik_Move_Motor.stop()
        }
    }
    if (name.includes("r-led")) {
        moveMotorZIP.setZipLedColor(parseFloat(name.substr(5, 1)), colors[value])
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
let lastChannelState = 0
let colors: number[] = []
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let speed = 0
let singal_Channel = 0
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
singal_Channel = 1
radio.setGroup(singal_Channel)
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
