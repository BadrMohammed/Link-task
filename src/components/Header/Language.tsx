import { useEffect, useState } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { getLanguage, local, toogleLanguage } from '../../lang/local';

export const Language = () => {
  const [lang, setLang] = useState<string>('');

  useEffect(() => {
    if (!lang) {
      if (getLanguage() === 'ar') {
        setLang('Arabic');
      } else {
        setLang('English');
      }
    }
  }, []);
  const handleLang = (key: string) => {
    if (getLanguage() === 'ar' && key === 'en') {
      toogleLanguage('en');
      setLang('English');
    } else {
      toogleLanguage('Arabic');
    }
  };
  return (
    <UncontrolledDropdown direction='down' className='dropdown_header'>
      <DropdownToggle caret className='button-toggle' color='light'>
        {local[lang]}
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem
          className='text-center'
          active={getLanguage() === 'en' ? true : false}
          onClick={() => handleLang('en')}
        >
          {local.English}
        </DropdownItem>
        <DropdownItem
          className='text-center mt-3'
          active={getLanguage() === 'ar' ? true : false}
          onClick={() => handleLang('ar')}
        >
          {local.Arabic}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
