import { useEffect } from "react";

import websocket from "./Communication/websocket";
import readWsMsg from "./Communication/readWebsocketMsg";
import Device from "./Components/Device";

function App() {

  // Websocket connection
  useEffect(()=>{
    websocket.onopen = () => console.log("ws opened");
    websocket.onclose = () => console.log("ws closed");
    websocket.onmessage = (msg) => {
      readWsMsg(JSON.parse(msg.data));
    }
  },[]);

  return (
    <div class="container-fluid">
      <header>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <a class="navbar-brand" href="/Home"><i class="fas fa-home fa-2x"/></a>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a type="button" class="nav-link" href="/"><i class="fas fa-bars fa-1x"/></a>
                    </li>
                    <li class="nav-item">
                        <a type="button" class="nav-link" href="/Projects">Projekte</a>
                    </li>
                    <li class="nav-item">
                        <a type="button" class="nav-link" href="/Informations">Informationen</a>
                    </li>
                    <li class="nav-item">
                        <a type="button" class="nav-link" href="/SignUp">Registrieren</a>
                    </li>
                </ul> 
                <form class="form-inline my-2 my-md-0">
                    <input class="form-control" type="text" placeholder="Search"/>
                </form>    
                <div class="collapse navbar-collapse justify-content-md-end">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/Login">Login</a>
                        </li>    
                    </ul>     
                </div>         
            </nav>
      </header>
      <div class="container-fluid">
        <div class="col" id="sidebar">
          Here will be the sidemenu
        </div>
        <div class="row" id="MainWindow">
          <Device />
          <Device />
          <Device />
          <Device />
          <Device />
          <Device />
          Here will be the extended ones
        </div>
      </div>
    </div>
  );
}

export default App;