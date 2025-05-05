import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import MovieDetail from './components/MovieDetail'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Movie type='movie'/>} /> 
    <Route path='/action' element={<Movie type='action'/>} /> 
    <Route path='/comedy' element={<Movie type='comedy'/>} /> 
    <Route path='/horror' element={<Movie type='horror'/>} /> 
    <Route path='/thriller' element={<Movie type='thriller'/>} /> 
    <Route path='/sci-fi' element={<Movie type='sci-fi'/>} /> 
    <Route path='/mystery' element={<Movie type='mystery'/>} /> 
    <Route path='/drama' element={<Movie type='drama'/>} /> 
    <Route path='/romance' element={<Movie type='romance'/>} /> 
    <Route path="/:type" element={<Movie />} />
    <Route path="/search/:query" element={<Movie />} />
    <Route path="/movie/:imdbID" element={<MovieDetail />} />
    </Routes>
    <Pagination/>
    </BrowserRouter>
    
    </>
  )
}

export default App