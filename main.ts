let mano = 0
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    mano = randint(1, 3)
    if (mano == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (mano == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (mano == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})
