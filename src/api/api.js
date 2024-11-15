import axios from 'axios';

const API_KEY = 'AIzaSyCTG6roPqujDSAa-ElQjEcNBLXVcch3ONs';
const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query, category, sort, startIndex) => {
  try {
    const params = {
      q: query,
      orderBy: sort,
      startIndex: startIndex,
      maxResults: 30,
      key: API_KEY,
    };

    if (category !== 'all') {
      params.filter = category;
    }

    const response = await axios.get(API_URL, { params });

    return response.data;
  } catch (error) {
    console.error('Ошибка при загрузке данных с Google Books API:', error);
    throw new Error('Не удалось загрузить книги');
  }
};