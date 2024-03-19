import { useEffect, useRef, useState } from 'react';
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
    const messageRef = useRef<HTMLDivElement>(null)

    const [messages, setMessages] = useState([
        {
            message: "Hello, what's your available ingredients today?",
            sentTime: "just now",
            sender: "ChatGPT",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendRequest = async (message: any) => {
        message += ' (Bicol Recipe only)';

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


    useEffect(() => {
        const domNode = messageRef.current;
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight;
        }
    })

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", marginTop: "55px", padding: "0px 30px 0px 30px", overflowY: "auto" }} >
            <div ref={messageRef} style={{ height: "100%", width: "100%", overflowY: 'auto' }} >
                {messages.map((message, i) => {
                    const messageModel = {
                        message: message.message,
                        sentTime: message.sentTime,
                        sender: message.sentTime,
                        direction: message.sender === "ChatGPT" ? 'incoming' : 'outgoing',

                    } as MessageModel;
                    return <Message
                        key={i} model={messageModel} color={message.sender === "ChatGPT" ? 'blue' : 'white'} />
                })}

            </div>
            <MessageList
                style={{ height: "50px", backgroundColor: "black" }}
                scrollBehavior="smooth"
                typingIndicator={isTyping ? <TypingIndicator content="Kusin-AI is typing" style={{ borderRadius: '10px' }} /> : null}
            >

            </MessageList>
            <MessageInput placeholder="Send a Message" onSend={handleSendRequest} style={{ backgroundColor: "black", marginTop: "5px" }}
                attachButton={false}
                inputMode='text'
            />
        </div>
    )
}

export default ChatGPTBox;
