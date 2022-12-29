// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------
window.URL = 'https://jjczsr.deta.dev';
// window.URL = 'https://9f3a-2402-4cc0-2502-39e-5d4a-f759-71b6-9a79.in.ngrok.io';

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
