import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LifeCycles, registerApplication, start } from "single-spa";



const token = () => {
  return 'lalalallalalllalalsdasdadaslalalasda'
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


registerApplication({
  name: "app-login",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-login"),
  activeWhen: "/login",
  customProps: {
    authToken: token()
  },
});



registerApplication({
  name: "app-home",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-home"),
  activeWhen: "/home",
  customProps: {
    authToken: token()
  },
});

registerApplication({
  name: "app-productos",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-productos"),
  activeWhen: "/productos",
  customProps: {
    authToken: token()
  },
});

registerApplication({
  name: "app-ventas",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-ventas"),
  activeWhen: "/ventas",
  customProps: {
    authToken: token()
  },
});

start();