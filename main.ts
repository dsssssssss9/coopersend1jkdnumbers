basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendNumber(10)
        basic.showArrow(ArrowNames.North)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendNumber(11)
        basic.showArrow(ArrowNames.South)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendNumber(12)
        basic.showArrow(ArrowNames.West)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendNumber(13)
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendNumber(18)
        basic.showIcon(IconNames.No)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendNumber(15)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendNumber(14)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendNumber(16)
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendNumber(17)
    }
})
