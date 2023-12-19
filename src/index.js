import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';


// class noteClass {
// 	constructor(id, title, content, data, category) {
// 		this.id = id;
// 		this.title = title;
// 		this.content = content;
// 		this.data = data;
// 		this.category = category
// 	}
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);



