import { getLanguage } from '../lang/local';
import CSS from 'csstype';

export const alignRight: CSS.Properties = {
  textAlign: getLanguage() === 'en' ? 'left' : 'right',
};
export const soluationList: CSS.Properties = {
  textAlign: getLanguage() === 'en' ? 'left' : 'right',
  direction: getLanguage() === 'en' ? 'ltr' : 'rtl',
};

export const dirRightReverse: CSS.Properties = {
  direction: getLanguage() === 'ar' ? 'ltr' : 'rtl',
};


export const rightReverse: CSS.Properties = {
  right: getLanguage() === 'en' ? '0px' : 'initial',
  left: getLanguage() === 'ar' ? '0px' :'initial',

};

