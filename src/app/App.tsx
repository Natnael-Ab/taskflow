import { applicationConfig } from "@/app/config/application";

import "./App.css";

function App() {
  return (
    <main className="app">
      <section className="app__content" aria-labelledby="page-title">
        <p className="app__eyebrow">{applicationConfig.name}</p>

        <h1 className="app__title" id="page-title">
          A clearer way to shape meaningful work.
        </h1>

        <p className="app__description">{applicationConfig.description}</p>

        <dl className="app__status">
          <div className="app__status-item">
            <dt>Foundation</dt>
            <dd>React and TypeScript</dd>
          </div>

          <div className="app__status-item">
            <dt>Build system</dt>
            <dd>Vite</dd>
          </div>

          <div className="app__status-item">
            <dt>Current stage</dt>
            <dd>{applicationConfig.stage}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}

export default App;
