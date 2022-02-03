import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import { Pagination } from '@mui/material';

const FilmPopulaire = () => {
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        fetchFilms(currentPage).then('r')
    }, [])

    const fetchFilms = async (page) => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5069784288b977989c82894c18511b88&language=fr-FR&page=${page}`).then((response) => response.data).catch((err) => err)
        setCurrentPage(data.page)
        setFilms(data.results)
        setTotalPages(data.total_pages)
        setLoading(false)
    }
    const handleChangePage = (event, page) => {
        setCurrentPage(page);
        console.log(page);
        fetchFilms(page);
    }
    return <>
        {!loading && <>
    <div className="d-flex justify-content-around flex-wrap">
        {films.map(film => <Card key={film.id} image={film.poster_path} titre={film.title} synopsis={film.overview} id={film.id}/>)}
    </div>
    <div className="d-flex justify-content-center">
        <Pagination count={totalPages} page={currentPage} siblings={1} size="large" onChange={handleChangePage}/>
    </div>
        </>}
        {loading && <div id="loading-icon" className="mt-5"></div>}
    </>
}


export default FilmPopulaire;