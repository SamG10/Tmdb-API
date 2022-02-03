import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Card from '../components/Card';
import PopularFilmsRequest from '../services/PopularFilmsRequest';

const Home = () => {
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [upComing, setUpComing] = useState([]);

    useEffect(() => {
        fetchFilms(currentPage).then('r')
        fetchNowPlaying(currentPage).then('r')
        fetchUpComing(currentPage).then('r')
    }, []);

    const fetchFilms = async (page) => {
        // const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5069784288b977989c82894c18511b88&language=fr-FR&page=${page}`).then((response) => response.data).catch((err) => err)
        const data = await PopularFilmsRequest.getPopularFilms(page)
        setCurrentPage(data.page)
        setFilms(data.results)
    }
    const fetchNowPlaying = async (page) => {
        // const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5069784288b977989c82894c18511b88&language=fr-FR&page=${page}`).then((response) => response.data).catch((err) => err)
        const data = await PopularFilmsRequest.getNowPlaying(page)
        setCurrentPage(data.page)
        setNowPlaying(data.results)
    }
    const fetchUpComing = async (page) => {
        // const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5069784288b977989c82894c18511b88&language=fr-FR&page=${page}`).then((response) => response.data).catch((err) => err)
        const data = await PopularFilmsRequest.getUpComing(page)
        setCurrentPage(data.page)
        setUpComing(data.results)
    }
    return <>
        <ScrollMenu>
            {films.map(film => <Card key={film.id} image={film.poster_path} titre={film.title} synopsis={film.overview} id={film.id}/>)}
        </ScrollMenu>
        <ScrollMenu>
            {nowPlaying.map(film => <Card key={film.id} image={film.poster_path} titre={film.title} synopsis={film.overview} id={film.id}/>)}
        </ScrollMenu>
        <ScrollMenu>
            {upComing.map(film => <Card key={film.id} image={film.poster_path} titre={film.title} synopsis={film.overview} id={film.id}/>)}
        </ScrollMenu>

    </>
}
export default Home;