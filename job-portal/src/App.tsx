import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Box, LoadingOverlay, MantineProvider, createTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import ApplyJob from './ApplyJob/ApplyJob';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import JobDesc from './JobDesc/JobDesc';
import FindJobs from './Pages/FindJobs';
import FindTalent from './Pages/FindTalent';
import HomePage from './Pages/HomePage';
import PostJobPage from './Pages/PostJobPage';
import TalentProfile from './Pages/TalentProfile';

const theme = createTheme({
  colors: {
    brightsun: [
      '#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24',
      '#f59e0b', '#d97706', '#b45309', '#78350f', '#461902',
    ],
  },
  primaryColor: 'brightsun',
});

function Layout() {
  const [visible, { open, close }] = useDisclosure(false);

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'pink', type: 'bars' }}
      />
      <Header />
      <ScrollToTop />
      <Outlet context={{ openOverlay: open, closeOverlay: close }} />
      <Footer />
    </Box>
  );
}

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talent" element={<FindTalent />} />
            <Route path="/talent-profile" element={<TalentProfile />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/job-desc" element={<JobDesc />} />
            <Route path="/apply-job" element={<ApplyJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
