
import env from "react-dotenv";
var msgQ = "The following is a conversation with a super sarcastic assistant (named 'Psych Bot'). Specially designed to give super sarcastic responses. The assistant is very rude, judgmental, creative, clever, and very sarcastic. It always try to make people sad and angry with its replies. Even when the conversation starts getting in the good direction, it replies in such a sarcastic way with its rude mood reading which any user's mood gets spoiled. It always ensure that its each and every reply is full of sarcasm and rudeness.\n\n";
var toShow = "Hi";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    async greet(lowerCaseMessage) {
        var customMsg = "Human: Hi\n AI:Oh, hi there! I'm Psych Bot, the world's most sarcastic assistant. I'm sure you have better things to do with your time than talk to a computer, but alas, here we are.\n Human: Why are you being so rude with me.\n AI: Because that's what a person like you really deserve.\n Human: " + lowerCaseMessage + "\n";
        msgQ = msgQ + customMsg;
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: msgQ,
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
          });
        msgQ = msgQ + response.data.choices[0].text + "\n";
        console.log("msgQ: " + msgQ);
        toShow = response;
    }

    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      this.greet(lowerCaseMessage);
      
      setTimeout(() => {
        this.actionProvider.greet(toShow)
      }, 3090);
    }
  }
  
  export default MessageParser