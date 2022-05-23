import { Button } from 'reactstrap';
import { local } from '../../lang/local';
import './CustomButton.scss';

export const CustomButton = ({ title, className, onClick, param }: any) => {
  return (
    <Button
      className={className}
      onClick={(e: any) => (param ? onClick(e, param) : onClick())}
    >
      {local[title] ? local[title] : title}
    </Button>
  );
};
