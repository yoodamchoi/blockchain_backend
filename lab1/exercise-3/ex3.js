const say = require('say')

say.speak('Hello!')
say.stop()
say.speak("hello?", 'Alex', 0.5)

const sorryDave = function () {
    console.log(say.speak("I'm sorry, Dave"))
}

setTimeout(sorryDave, 5000);