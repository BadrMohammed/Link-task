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

const fetchNews = (dispatch: Function, id: any, setLoading: any) => {
  setLoading(true);
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
            payload = { news: [res.data], id: id };
          }
          dispatch(newsSlice.actions.getNews(payload));
        }
      }
      setLoading(false);
    })
    .catch(({ err }) => {
      setLoading(false);
    })
    .finally(() => {});
};

export { fetchCategories, fetchNews };
