import { defaultTheme, x } from '@xstyled/styled-components';
import { FC } from 'react';
import StoryLayout from 'stories/StoryLayout';

import { Tag } from '.';

export default {
  title: "Themed/Tag"
};

const theme = {
  ...defaultTheme
}

export const Normal: FC = () => {
  return (
    <StoryLayout>
      <x.div display="flex" spaceX="2">
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </x.div>
    </StoryLayout>
  )
}
