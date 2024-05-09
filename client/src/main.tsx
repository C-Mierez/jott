import "~/styles/index.css";

import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import QueryProvider from "./providers/query-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryProvider>
            <App />
        </QueryProvider>
    </React.StrictMode>
);
