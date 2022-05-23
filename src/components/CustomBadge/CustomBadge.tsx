import { Badge } from 'reactstrap';
import { local } from '../../lang/local';
import './CustomBadge.scss';

export const CustomBadge = ({ className, title }: any) => {
  return <Badge className={className} pill>{local[title]}</Badge>;
};
