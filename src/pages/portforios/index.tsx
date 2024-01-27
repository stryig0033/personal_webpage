import {FC, memo} from 'react';

import Page from '../../components/Layout/Page';
import Portfolio from '../../components/Sections/Portfolio';
import Resume from '../../components/Sections/Resume';
import {homePageMeta} from '../../data/data';

const MyPageComponent: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Portfolio />
      <Resume />
    </Page>
  );
});

export default MyPageComponent;