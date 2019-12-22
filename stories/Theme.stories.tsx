import Box from 'components/Box';
import Container from 'components/Container';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { container, XCoreTheme } from 'theme';
import useTheme from '../src/useTheme';

export default { title: 'Theme' };

const theme: XCoreTheme = {
  name: 'Container theme',
  ...container({
    width: '70%',
    background: 'grey'
  })
};

export const WithContainer: FC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Box width='100%'>
        <Box background='red' color='white' p='10px' my='15px'>
          Box 1
        </Box>
        <Box background='blue' color='white' p='10px' my='15px'>
          Box 2
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);

export const GetThemeValue: FC = () => (
  <ThemeProvider theme={theme}>
    <ThemeToJSON />
  </ThemeProvider>
);

const ThemeToJSON: FC = () => {
  const theme = useTheme();

  return <pre>{JSON.stringify(theme, null, 2)}</pre>;
};
