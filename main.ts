enum RadioMessage {
    message1 = 49434,
    message2 = 1435,
    message = 27972
}
input.onButtonPressed(Button.A, function () {
    if (points == 0) {
        basic.showIcon(IconNames.No)
        music.play(music.stringPlayable("- - - - - - - - ", 206), music.PlaybackMode.InBackground)
    } else {
        radio.sendNumber(100)
        radio.sendNumber(200)
        radio.sendNumber(300)
        points += -10
    }
})
radio.onReceivedString(function (receivedString) {
    if (A == B && B == C) {
        basic.showString("+100")
        points += 100
    } else if (A == B && A != C || (A == C && A != B || B == C && A != B)) {
        basic.showString("+20")
        points += 20
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (points))
})
radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        A = value
    }
    if (name == "B") {
        B = value
    }
    if (name == "C") {
        C = value
    }
})
let C = 0
let B = 0
let A = 0
let points = 0
basic.showLeds(`
    # # # . .
    # . . # .
    # # # . .
    # . . . .
    # . . . .
    `)
points = 100
radio.setGroup(1)
