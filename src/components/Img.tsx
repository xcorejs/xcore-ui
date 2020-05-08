import { composedBoxBase } from 'bases';
import { BoxProps } from 'components/Box';
import * as CSS from 'csstype';
import React, { FC, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ResponsiveValue, system } from '@styled-system/core';
import { shouldForwardProp } from 'utils/withConfig';

export type ImgProps =
  {
    src: string;
    alt: string;
    objectFit?: ResponsiveValue<CSS.ObjectFitProperty>;
  }
  & ImgHTMLAttributes<HTMLImageElement>
  & BoxProps;

const Img: FC<ImgProps> = ({ ...props }) =>
  <ImgStyle {...props} />
;

export default Img;

const imgSystem = system({ objectFit: true });

const ImgStyle = styled.img.withConfig<ImgProps>({ shouldForwardProp })`
  ${composedBoxBase}
  ${imgSystem}
`;
