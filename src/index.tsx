import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerIcons } from '@fluentui/style-utilities';
import { SVGIcons } from './utils/helpers';
registerIcons(SVGIcons);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
