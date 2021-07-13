import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css';
// import 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:300,900&display=swap';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin, faGithub} from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from "react-icons/fa";
import App from './App';
// library.add(fab, faLinkedin, faGithub);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
