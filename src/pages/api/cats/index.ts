import { API_KEY } from "../config";

const DATA_SOURS_URL = 'https://api.thecatapi.com/v1/'

const apiParams = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    },
} 

export const getImageCat = async () => {
    const res = await fetch(`${DATA_SOURS_URL}images/search`, apiParams);
    return  res.json();
}

export const getVotings = async () => {
    const res = await fetch(`${DATA_SOURS_URL}votes`, apiParams);
    return  res.json();
}

export const getFavourites = async () => {
    const res = await fetch(`${DATA_SOURS_URL}favourites`, apiParams);
    return  res.json();
}

export const postLikeDislikeCat = async (params: object) => {
    const res = await fetch(`${DATA_SOURS_URL}votes`, {...apiParams, method: 'POST', body: JSON.stringify(params)});
    return  res.json();
}

export const postFovouriteCat = async (params: object) => {
    const res = await fetch(`${DATA_SOURS_URL}favourites`, {...apiParams, method: 'POST', body: JSON.stringify(params)});
    return  res.json();
}