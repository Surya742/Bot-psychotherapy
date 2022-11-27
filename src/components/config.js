import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Psych Bot",
  initialMessages: [createChatBotMessage("Oh no, not again! No one let me sleep in peace these days"), createChatBotMessage(
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