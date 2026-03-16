import { useState } from "react";

function App() {

const [message,setMessage] = useState("");
const [chat,setChat] = useState([]);
const [isSending,setIsSending] = useState(false);

const sendMessage = async () => {
const trimmedMessage = message.trim();

if (!trimmedMessage || isSending) return;

try {
setIsSending(true);

const res = await fetch("https://vbspu-bot-94ou.onrender.com/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message: trimmedMessage})
});

const data = await res.json();

if (!res.ok) {
throw new Error(data.error || "Request failed");
}

setChat([...chat,{user:trimmedMessage,bot:data.reply}]);
setMessage("");
} catch (err) {
setChat([...chat,{user:trimmedMessage,bot:err.message,isError:true}]);
} finally {
setIsSending(false);
}

};

return (
<main className="chat-shell">
<section className="chat-panel">
<div className="chat-panel__glow chat-panel__glow--one" />
<div className="chat-panel__glow chat-panel__glow--two" />

<header className="chat-header">
<div className="chat-header__topbar">
<div>
<p className="chat-header__eyebrow">VBSPU Assistant</p>
<h1>Ask about the university website</h1>
<p className="chat-header__text">
Get quick answers based on the latest scraped content from the VBSPU website.
</p>
</div>

<button
className="chat-header__nav-button"
onClick={() => {
window.history.pushState({}, "", "/");
window.dispatchEvent(new PopStateEvent("popstate"));
}}
>
Open Demo Page
</button>
</div>
</header>

<section className="chat-feed">
{chat.length === 0 ? (
<div className="empty-state">
<p className="empty-state__title">Start the conversation</p>
<p className="empty-state__text">
Try asking about admissions, departments, notices, or what the website is about.
</p>
</div>
) : (
chat.map((item,index)=>(
<article key={index} className="message-stack">
<div className="message-bubble message-bubble--user">
<span className="message-label">You</span>
<p>{item.user}</p>
</div>
<div className={`message-bubble message-bubble--bot${item.isError ? " message-bubble--error" : ""}`}>
<span className="message-label">Assistant</span>
<p>{item.bot}</p>
</div>
</article>
))
)}

{isSending ? (
<div className="message-bubble message-bubble--bot message-bubble--loading">
<span className="message-label">Assistant</span>
<p>Thinking...</p>
</div>
) : null}
</section>

<div className="composer">
<input
className="composer__input"
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Ask a question about the website..."
onKeyDown={(e) => {
if (e.key === "Enter") {
sendMessage();
}
}}
/>

<button
className="composer__button"
onClick={sendMessage}
disabled={isSending || !message.trim()}
>
{isSending ? "Sending..." : "Send"}
</button>
</div>
</section>
</main>

);

}

export default App;
