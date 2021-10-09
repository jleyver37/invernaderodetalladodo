input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(input.temperature())
    basic.pause(1000)
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (input.temperature() < 8) {
        if (input.lightLevel() <= 100) {
            basic.showString("TyL.bajas")
        } else if (input.lightLevel() >= 200) {
            basic.showString("T.baja,L.alta")
        } else {
            basic.showString("T.baja")
        }
    } else if (input.temperature() > 30) {
        if (input.lightLevel() <= 100) {
            basic.showString("T.alta,L.baja")
        } else if (input.lightLevel() >= 200) {
            basic.showString("TyL.altas")
        } else {
            basic.showString("T.alta")
        }
    } else {
        if (input.lightLevel() <= 100) {
            basic.showString("L.baja")
        } else if (input.lightLevel() >= 200) {
            basic.showString("L.alta")
        } else {
            basic.showString("TyL.ideales")
        }
    }
})
