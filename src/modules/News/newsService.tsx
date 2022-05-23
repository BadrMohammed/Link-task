/* eslint-disable import/prefer-default-export */
import { newsSlice } from '../../redux/store';
import httpService from '../../infrastructure/services/http-service';

const fetchCategories = (dispatch: Function) => {
  httpService
    .get('/91298d970c27e9a06518')
    .then((res: any) => {
      if (res) {
        if (res.status === 200) {
          dispatch(newsSlice.actions.getCategories(res.data.newsCategory));
        }
      }
    })
    .catch(({ err }) => {})
    .finally(() => {});
};

const fetchNews = (dispatch: Function, id: any) => {
  let url = '/d275425a434e02acf2f7';

  if (id) {
    url += `/News/${id}`;
  }
  httpService
    .get(url)
    .then((res: any) => {
      if (res) {
        if (res.status === 200) {
          let payload = {};
          if (!id) {
            payload = { news: res.data.News, id: 0 };
          } else {
            payload = { news: [res.data], id: 0 };
          }
          dispatch(newsSlice.actions.getNews(payload));
        }
      }
    })
    .catch(({ err }) => {})
    .finally(() => {});
};

export { fetchCategories, fetchNews };
