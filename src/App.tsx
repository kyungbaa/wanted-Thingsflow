import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';
import Issue from './page/Issue/Issue';
import IssueList from './page/IssueList/IssueList';
import NotFound from './page/NotFound/NotFound';
import theme from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/issueList" />} />
            <Route path="/issueList" element={<IssueList />} />
            <Route path="/issue/:id" element={<Issue />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
