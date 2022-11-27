import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Psych Bot",
  initialMessages: [createChatBotMessage("Hi, I'm Psych Bot."), createChatBotMessage(
    "Why you came here? Don't you have other things to do?",
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