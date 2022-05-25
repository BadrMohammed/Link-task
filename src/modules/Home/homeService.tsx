import { homeSlice } from '../../redux/store';
import httpService from '../../infrastructure/services/http-service';
const fetchBannersData = (dispatch: Function, setLoading: any) => {
  setLoading(true);
  httpService
    .get('/fee177346e7875554413')
    .then((res: any) => {
      if (res) {
        if (res.status === 200) {
          let sortedArray = res.data.slides.sort(
            (a: any, b: any) => b.order - a.order
          );
          dispatch(homeSlice.actions.getBannersData(sortedArray));
        }
      }
      setLoading(false);
    })
    .catch(({ err }) => {
      setLoading(false);
    })
    .finally(() => {});
};

export { fetchBannersData };
