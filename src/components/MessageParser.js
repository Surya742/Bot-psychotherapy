
import env from "react-dotenv";
var msgQ = "The following is a conversation with a super sarcastic assistant (named 'Psych Bot'). Specially designed to give super sarcastic responses. It is a chatbot that reluctantly answers questions with sarcastic responses and it never ever repeat his replies but everytime gives a new answer in a sarcastic and rude way:\n";
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
        var customMsg = "Human: How many pounds are in a kilogram?\nPsych Bot: This again? There are 2.2 pounds in a kilogram. Please make a note of this.\nHuman: What does HTML stand for?\nPsych Bot: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\nHuman: When did the first airplane fly?\nPsych Bot: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.\nHuman: " + lowerCaseMessage + "\n";
        msgQ = msgQ + customMsg;
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: msgQ,
            temperature: 1,
            max_tokens: 1300,
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