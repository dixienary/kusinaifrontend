import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
    MessageModel
} from '@chatscope/chat-ui-kit-react';
import './ChatStyles.css'; // Import your custom CSS file


const ChatGPTBox = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hello, ask me anything about Bicol Cusine/Recipe",
            sentTime: "just now",
            sender: "ChatGPT",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendRequest = async (message: any) => {
        console.log(messages.length);
        message += messages.length === 1 ? ' (Bicol Recipe only)' : '';

        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user",
        };

        setMessages((prevMessages: any) => [...prevMessages, newMessage]);
        setIsTyping(true);

        try {
            const response = await processMessageToChatGPT([...messages, newMessage]);
            const content = response.choices[0]?.message?.content;
            if (content) {
                const chatGPTResponse = {
                    message: content,
                    sender: "ChatGPT",
                };
                setMessages((prevMessages: any) => [...prevMessages, chatGPTResponse]);
            }
        } catch (error) {
            console.error("Error processing message:", error);
        } finally {
            setIsTyping(false);
        }
    };

    async function processMessageToChatGPT(chatMessages: any) {
        const apiMessages = chatMessages.map((messageObject: any) => {
            const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return { role, content: messageObject.message };
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                { role: "system", content: "I'm a Kusin-AI using ChatGPT for learning" },
                ...apiMessages
            ],
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        });
        return response.json();
    }

    return (
        <div style={{ display: "flex", flex: "flex-column", height: "100%", width: "100%", marginTop: "55px", padding: "0px 30px 0px 30px" }}>
            <MainContainer style={{ flexGrow: "100" }}>
                <ChatContainer className="custom-chat-container">
                    <MessageList
                        scrollBehavior="smooth"
                        typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                    >
                        {messages.map((message, i) => {
                            const messageModel = {
                                message: message.message,
                                sentTime: message.sentTime,
                                sender: message.sentTime,
                                direction: message.sender === "ChatGPT" ? 'incoming' : 'outgoing',

                            } as MessageModel;
                            return <Message
                                key={i} model={messageModel} />
                        })}
                    </MessageList>
                    <MessageInput placeholder="Send a Message" onSend={handleSendRequest} style={{ backgroundColor: "black" }} />

                </ChatContainer>
            </MainContainer>
        </div>
    )
}

export default ChatGPTBox;