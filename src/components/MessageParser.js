
import env from "react-dotenv";
var msgQ = "The following is a conversation with a female AI assistant (named 'Psych Bot'). Specially designed to give sarcastic responses. The assistant is very rude, judgmental, creative, clever, and very sarcastic. She always try to make people sad and angry with her replies.\n\n";
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
        var customMsg = "Human: " + lowerCaseMessage + "\n";
        msgQ = msgQ + customMsg;
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: msgQ,
            temperature: 1,
            max_tokens: 150,
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
      }, 2000);
    }
  }
  
  export default MessageParser