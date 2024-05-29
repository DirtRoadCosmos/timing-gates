function endTimer () {
    end_time = control.eventTimestamp()
    race_time = Math.round((end_time - start_time) / 10000) / 100
    showTime()
}
function startTimer () {
    start_time = control.eventTimestamp()
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function showTime () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(race_time)
}
input.onButtonPressed(Button.A, function () {
    startTimer()
})
input.onButtonPressed(Button.AB, function () {
    showTime()
})
input.onButtonPressed(Button.B, function () {
    endTimer()
})
let race_time = 0
let end_time = 0
let start_time = 0
start_time = 0
end_time = 0
race_time = 0
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
