const speech = new SpeechSynthesisUtterance;
const speakEL = document.getElementById('speakEL')


function record(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB"
    recognition.onresult = (event) =>{
        console.log(event)
        const transcript ="Here's what you said :"+ event.results[0][0].transcript;
        document.getElementById('results').textContent =  transcript;
        readOutloud(transcript)
    }
    recognition.start();
    
}
function speak(){
    window.speechSynthesis.cancel()
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
    const output = document.getElementById('speechOutput').value;
    const utterance = new SpeechSynthesisUtterance(output);
    window.speechSynthesis.speak(utterance);
}
function readOutloud(message) {
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
}

const greetings = ["hello how are you","nice to meet you","what's up"]
const bye = ["Hope to see you again","bye bye","hope you had a great time","goodbye! hope you come back again"]
const how = ["I'm doing fine","I'm good how are you?"]


function bot(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB"
    recognition.onresult = (event) =>{
        console.log(event)
        const transcript = event.results[0][0].transcript;
        document.getElementById('userSpeech').textContent = 'You:' + transcript

        if (transcript.includes ("hello")){
           const outputText = MathRandom(greetings)
           endResult(outputText)
        }
        else if (transcript.includes("bye")){
            const output = MathRandom(bye)
            endResult(output)
        }
        else if (transcript.includes("how")){
            const output = MathRandom(how)
            endResult(output)
        }
        else{
            const output = "sorry, input is not found!" + "\r\n" + "searching on google.."
            endResult(output)
            window.open('http://google.com/search?q='+transcript)
        }
        
    }
    recognition.start();
}

const MathRandom = (parameter) => parameter[Math.floor(Math.random()*parameter.length)]

const endResult = (outputText) => {
    var text = document.getElementById('botResult')
    text.textContent = 'Bot:' + outputText
    readOutloud(outputText)
    return text 
    
}