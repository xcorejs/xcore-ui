import { Box, Container, XcoreTheme, breakpoints, container } from 'index';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from 'useTheme';

export default { title: 'Theme - Breakpoint' };

const theme: XcoreTheme = {
  name: 'Container theme',
  ...breakpoints(['30em', '48em', '64em', '78em', '85em']),
  ...container({
    width: ['100%', '100%', '30rem', '40rem', '50rem', '70rem'],
    background: 'grey'
  })
};

export const Aliases: FC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Box width="100%">
        <Box color="white" p="10px" my="15px">
          <GetAliases />
          <ThemeToJSON />
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);

const GetAliases: FC = () => {
  const { breakpoints } = useTheme();

  return (
    <pre>
      [0] {breakpoints[0]} | [xs] {breakpoints.xs} <br />
      [1] {breakpoints[1]} | [sm] {breakpoints.sm} <br />
      [2] {breakpoints[2]} | [md] {breakpoints.md} <br />
      [3] {breakpoints[3]} | [lg] {breakpoints.lg} <br />
      [4] {breakpoints[4]} | [xl] {breakpoints.xl} <br />
    </pre>
  );
};

const ThemeToJSON: FC = () => {
  const theme = useTheme();

  return <pre>{JSON.stringify(theme, null, 2)}</pre>;
};