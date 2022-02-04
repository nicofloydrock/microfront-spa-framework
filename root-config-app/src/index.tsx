import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LifeCycles, registerApplication, start } from "single-spa";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




registerApplication({
  name: "app-home",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-home"),
  activeWhen: "/home"
});

registerApplication({
  name: "app-productos",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-productos"),
  activeWhen: "/productos"
});

registerApplication({
  name: "app-ventas",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-ventas"),
  activeWhen: "/ventas"
});

start();