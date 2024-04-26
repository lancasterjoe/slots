let reel = 0
radio.onReceivedNumber(function (receivedNumber) {
    reel = randint(1, 9)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.InBackground)
    basic.pause(500)
    if (reel == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (reel == 2) {
        basic.showIcon(IconNames.SmallHeart)
    }
    if (reel == 3) {
        basic.showIcon(IconNames.Yes)
    }
    if (reel == 4) {
        basic.showIcon(IconNames.No)
    }
    if (reel == 5) {
        basic.showIcon(IconNames.Happy)
    }
    if (reel == 6) {
        basic.showIcon(IconNames.Sad)
    }
    if (reel == 7) {
        basic.showIcon(IconNames.Confused)
    }
    if (reel == 8) {
        basic.showIcon(IconNames.Angry)
    }
    if (reel == 9) {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    radio.setGroup(2)
})
