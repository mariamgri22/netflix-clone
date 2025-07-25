
import { useCallback, useEffect, useState } from 'react';
import './App.css'
import SideBar from './components/SideBar'
import { getData } from './utils/request';
import type { IMovie } from './types';
import Content from './components/Content';


function App() {
  const [trending, setTrending] = useState<IMovie[]>([]);
  const [featured, setFeatured] = useState<IMovie | null>(null);

  useEffect(() => {
    getData().then(res => {
      const lastSeenId = sessionStorage.getItem('lastSeenId');
  
      const sorted = res.TendingNow
        .sort((a, b) => {
          if (a.Id === lastSeenId) return -1;
          if (b.Id === lastSeenId) return 1;
          return new Date(b.Date).getTime() - new Date(a.Date).getTime();
        })
        .slice(0, 50);
  
      setFeatured({
        ...res.Featured,
        VideoUrl: '',
      });
      setTrending(sorted);
    });
  }, []);




const handleSelectMovie = useCallback((movie: IMovie) => {
  setFeatured(movie);
  sessionStorage.setItem('lastSeenId', movie.Id);
}, []);


return(  <>
    <div className="relative flex min-h-screen">
      <div className="absolute top-0 left-0 h-full z-20 group">
        <SideBar />
      </div>
      {featured && (
        <Content
          featured={featured}
          trending={trending}
          handleSelectMovie={handleSelectMovie}
        />
      )}
    </div>
  </>
  )
}

export default App
