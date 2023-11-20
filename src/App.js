import "@fontsource/tajawal";
import "@fontsource/tajawal/700.css";

import { DataProvider } from './data-provider';

import MainMenu from './parts/main-menu';
import MainFeaturedVideo from './parts/main-featured-video';
import TrendingNowSection from './parts/trending-now-section';

import './App.css';

function App() {

  return (
    <div className="tv-app">
      <DataProvider>
        <MainMenu />
        <MainFeaturedVideo />
        <TrendingNowSection />
      </DataProvider>
    </div>
  );
}

export default App;
