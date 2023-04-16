import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Article } from './pages/Article'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Route>
    </Routes>
  )
}
