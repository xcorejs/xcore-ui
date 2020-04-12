import { composedTextBase, TextBaseProps } from 'bases';
import React, { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import useTheme from 'useTheme';
import { merge } from 'utils/merge';
import { typeVariant } from 'utils/variant';

import { LinkAs, LinkVariant } from './theme';

export type LinkProps =
  & TextBaseProps
  & AnchorHTMLAttributes<HTMLAnchorElement | HTMLSpanElement>;

export type ExtendedLinkProps = {
  as?: LinkAs;
  variant?: LinkVariant;
  v?: LinkVariant;

  children?: ReactNode;
} & LinkProps;

const Link = forwardRef<HTMLAnchorElement, ExtendedLinkProps>((p, ref) => {
  const { link } = useTheme();

  const props = merge(
    p,
    typeVariant(link, 'simple', p),
    link.default
  );

  return (
    <LinkStyle {...props} ref={ref} />
  );
});

export default Link;

const LinkStyle = styled.a`
  ${composedTextBase}

  cursor: pointer;
  & * {
    cursor: pointer;
  }
`;
