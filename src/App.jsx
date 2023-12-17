import { Route, Routes, Navigate } from 'react-router-dom'

import GithubProvider from './context/GithubProvider'

import Header from "./components/Layouts/Header"

import {
  About,
  Home,
  NotFound,
  Organization,
  UserProfile,
  Users,
} from './components/pages.index'

function App() {
  return (
    <>
      <GithubProvider>
        <Header />
        <main className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:username" element={<UserProfile />} />
            <Route path="/org/:username" element={<UserProfile />} />
            <Route path="/orgs" element={<Organization />} />
            <Route path="/page-not-found" element={<NotFound />} />
            <Route
              path="/*"
              element={<Navigate to="/page-not-found" replace={true} />}
            />
          </Routes>
        </main>
      </GithubProvider>
    </>
  )
}

export default App
