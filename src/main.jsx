import { createRoot } from 'react-dom/client';
import App from './App';
import './capacitorBridge';
import './styles.css';

createRoot(document.getElementById('root')).render(<App />);
