import { useAppSelector } from '../../../redux/hooks';
import { newsSlice } from '../../../redux/store';
import { NewDetailsView } from './NewDetailsView';

export const NewDetailsController = () => {
    const newsState = useAppSelector(newsSlice.state);
  return <NewDetailsView detailsItem={newsState.new_details} categories={newsState.categories} />;
};
