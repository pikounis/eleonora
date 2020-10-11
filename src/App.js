import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Home, About } from './routes';
import Layout from "./components/layout";
import Gallery from "./routes/gallery/Gallery";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Layout>
                <Route path={'/'} exact component={Home} />
                <Route path={'/gallery'} component={Gallery} />
                {/*<Route path={'/about'} component={About} />*/}


            </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
