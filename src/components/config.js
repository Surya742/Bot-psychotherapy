import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Psych Bot",
  initialMessages: [createChatBotMessage("Hi, I'm Psych Bot."), createChatBotMessage(
    "How are you feeling today? Let's talk for a bit.",
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