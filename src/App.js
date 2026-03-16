import './App.css';
import ChatUI from './page/chatui';
import DemoPage from './page/demopage';
import { useEffect, useState } from 'react';

const getRoute = () => {
  return window.location.pathname === '/chat' ? '/chat' : '/';
};

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    route === '/chat' ? <ChatUI /> : <DemoPage />
  );
}

export default App;
