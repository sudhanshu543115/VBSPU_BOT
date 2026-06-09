function DemoPage() {
  return (
    <main className="chat-shell">
      <section className="chat-panel demo-panel">
        <div className="chat-panel__glow chat-panel__glow--one" />
        <div className="chat-panel__glow chat-panel__glow--two" />

        <header className="chat-header">
          <p className="chat-header__eyebrow">AI Chatbot Demo</p>
          <h1>VBSPU Knowledge Assistant</h1>
          <p className="chat-header__text">
            This demo page shows how the chatbot interface can coexist with
            additional pages such as documentation, feature explanations,
            or project demos.
          </p>
        </header>

        <section className="demo-content">

          <div className="demo-card">
            <h2>About This Project</h2>
            <p>
              This chatbot is built using the MERN stack and integrates an
              AI model to answer questions using information extracted from
              selected websites.
            </p>
          </div>

          <div className="demo-card">
            <h2>Key Features</h2>
            <ul>
              <li>AI powered question answering</li>
              <li>Website content scraping</li>
              <li>Real-time chat interface</li>
              <li>Chat history storage</li>
              <li>Fast and responsive UI</li>
            </ul>
          </div>

          <div className="demo-card">
            <h2>How It Works</h2>
            <p>
              When a user asks a question, the backend searches the
              configured website content, sends the relevant information
              to an AI model, and returns a generated response to the chat
              interface.
            </p>
          </div>

          <button
            className="composer__button demo-back-button"
            onClick={() => {
              window.history.pushState({}, "", "/chat");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
          >
            Open Chat Page
          </button>

        </section>
      </section>
    </main>
  );
}

export default DemoPage;
