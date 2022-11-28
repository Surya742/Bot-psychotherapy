import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Psych Bot",
  initialMessages: [createChatBotMessage("Oh no, not again! Another day but still have to talk to primitive humans like you"), createChatBotMessage(
    "Okay then, Hi, I'm Psych Bot.",
    {
      withAvatar: true,
      delay: 1000,
    }
  )],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config