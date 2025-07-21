"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { chatWithBot, type ChatMessage } from "@/ai/flows/chatbot-flow";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "../icons/Logo";

const ChatMessageBubble = ({ message }: { message: ChatMessage }) => {
  const isUser = message.role === "user";
  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
      )}
      <div
        className={`px-4 py-2 rounded-2xl max-w-sm ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-none"
            : "bg-muted rounded-bl-none"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
       {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
          <User className="w-5 h-5 text-accent" />
        </div>
      )}
    </div>
  );
};


export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      content: "Hi there! I'm Stova's AI assistant. How can I help you today? Feel free to ask about our services like Meta Ads, Websites, or AI Agents.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
        // A slight delay to allow the new message to render
        setTimeout(() => {
            const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }, 100);
    }
  }, [messages]);


  const handleSend = async () => {
    if (input.trim() === "" || loading) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await chatWithBot(newMessages);
      const botMessage: ChatMessage = { role: "model", content: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      toast({
        title: "Oh no!",
        description: "There was a problem talking to the AI. Please try again.",
        variant: "destructive",
      });
      const botMessage: ChatMessage = { role: "model", content: "I seem to be having some trouble connecting. Please try again in a moment." };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-24 right-6 z-40">
        <motion.div
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
        >
          <Button
            size="icon"
            className="w-14 h-14 rounded-full shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Chatbot"
          >
            {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-[11rem] right-6 z-40"
          >
            <Card className="w-[380px] h-[550px] shadow-2xl rounded-2xl flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                  <Logo />
                </div>
                 <CardDescription className="pt-1">We usually reply instantly.</CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col">
                <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                  <div className="space-y-6">
                    {messages.map((msg, index) => (
                      <ChatMessageBubble key={index} message={msg} />
                    ))}
                    {loading && (
                      <div className="flex items-start gap-3">
                         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Bot className="w-5 h-5 text-primary" />
                        </div>
                        <div className="px-4 py-3 rounded-2xl bg-muted rounded-bl-none">
                          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                <div className="p-4 border-t bg-background">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                  >
                    <div className="relative">
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="pr-12"
                        disabled={loading}
                      />
                      <Button
                        type="submit"
                        size="icon"
                        className="absolute top-1/2 -translate-y-1/2 right-1.5 h-8 w-8"
                        disabled={loading || input.trim() === ""}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
