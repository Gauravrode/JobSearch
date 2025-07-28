import '@mantine/carousel/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import FindJobs from './Pages/FindJobs';
import FindTalent from './Pages/FindTalent';
import HomePage from './Pages/HomePage';
import PostJobPage from './Pages/PostJobPage';
import TalentProfile from './Pages/TalentProfile';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import JobDesc from './JobDesc/JobDesc';

const theme = createTheme({
  colors: {
    brightsun: [
      '#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24',
      '#f59e0b', '#d97706', '#b45309', '#78350f', '#461902',
    ],
  },
  primaryColor: 'brightsun',
});

function App() {
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-jobs" element={<FindJobs />} />
           <Route path="/find-talent" element={<FindTalent/>} />
           <Route path="/talent-profile" element={<TalentProfile/>} />
           <Route path="/post-job" element={<PostJobPage/>} />
            <Route path="/job-desc" element={<JobDesc />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
