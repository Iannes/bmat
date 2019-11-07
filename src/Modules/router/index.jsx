import React from "react"
import { Route, Switch } from "react-router-dom"
// Components
import Spinner from "../components/common/Spinner"

const Home = React.lazy(() => import("../../Pages/Home"))
const NotFound = React.lazy(() => import("../../Pages/NotFound"))

const AppRouter = () => (
  <React.Suspense fallback={<Spinner />}>
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route component={() => <NotFound />} />
    </Switch>
  </React.Suspense>
)

export default AppRouter
