import {FC, memo} from 'react';

import Page from '../../components/Layout/Page';
import Portfolio from '../../components/Sections/Portfolio';
import {homePageMeta} from '../../data/data';

const MyPageComponent: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Portfolio />
    </Page>
  );
});

export default MyPageComponent;