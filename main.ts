enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 100) {
        reel = randint(1, 9)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.InBackground)
        basic.pause(500)
        if (reel == 1) {
            basic.showIcon(IconNames.Heart)
            radio.sendValue("A", 1)
        }
        if (reel == 2) {
            basic.showIcon(IconNames.SmallHeart)
            radio.sendValue("A", 2)
        }
        if (reel == 3) {
            basic.showIcon(IconNames.Yes)
            radio.sendValue("A", 3)
        }
        if (reel == 4) {
            basic.showIcon(IconNames.No)
            radio.sendValue("A", 4)
        }
        if (reel == 5) {
            basic.showIcon(IconNames.Happy)
            radio.sendValue("A", 5)
        }
        if (reel == 6) {
            basic.showIcon(IconNames.Sad)
            radio.sendValue("A", 6)
        }
        if (reel == 7) {
            basic.showIcon(IconNames.Confused)
            radio.sendValue("A", 7)
        }
        if (reel == 8) {
            basic.showIcon(IconNames.Angry)
            radio.sendValue("A", 8)
        }
        if (reel == 9) {
            basic.showIcon(IconNames.Asleep)
            radio.sendValue("A", 9)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(100)
    radio.sendNumber(200)
    radio.sendNumber(300)
    points += -10
})
radio.onReceivedValue(function (name, value) {
    if (("A" as any) == ("B" as any) && ("B" as any) == ("C" as any)) {
        basic.showString("100 points")
        points += 100
    } else if (("A" as any) == ("B" as any) && (("A" as any) == ("C" as any) || ("A" as any) == ("B" as any) && (("B" as any) == ("C" as any) || ("A" as any) == ("C" as any) && ("B" as any) == ("C" as any)))) {
        basic.showString("20 points")
        points += 20
    } else {
        basic.showString("lose")
    }
})
let reel = 0
let points = 100
radio.setGroup(1)
