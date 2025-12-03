import { createRoot } from 'react-dom/client';
import App from './App';

import './less/index.less';
import './less/kks.less';
import './less/manageWishlist.less';
import './less/signIn.less';
import './less/snowFlakes.less';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}
