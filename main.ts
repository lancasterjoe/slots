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
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (points))
})
radio.onReceivedValue(function (name, value) {
    if (("A" as any) == ("B" as any) && ("B" as any) == ("C" as any)) {
        basic.showString("+100")
        points += 100
    } else if (("A" as any) == ("B" as any) || (("A" as any) == ("C" as any) || ("B" as any) == ("C" as any))) {
        basic.showString("+20")
        points += 20
    } else {
        basic.showIcon(IconNames.No)
    }
})
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
