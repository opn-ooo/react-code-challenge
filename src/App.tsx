import React from "react"
import { Route, Switch } from "wouter"

// Core Hooks
import { routePreprocess } from "@hooks/actions/routePreprocess"

// Routes info
import Routes from "@app/routes"

const baseUrl = import.meta.env.VITE_BASE_PATH

const App = () => {
    routePreprocess(Routes)

    return (
        <Switch>
            {Routes.map(({ component, path, key }) => (
                <Route
                    base={baseUrl}
                    key={path || key}
                    path={path}
                    component={component as any}
                />
            ))}
        </Switch>
    )
}

export default App
