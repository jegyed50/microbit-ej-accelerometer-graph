input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 255; index++) {
        led.plotBarGraph(
        index,
        255
        )
        serial.writeValue("index", index)
        basic.pause(50)
    }
})
led.setBrightness(255)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
	
})
