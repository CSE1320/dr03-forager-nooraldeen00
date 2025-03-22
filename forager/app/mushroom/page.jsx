import NavBar from '../../components/NavBar';
import MushroomCard from '../../components/MushroomCard';
import SimilarMatchList from '../../components/SimilarMatchList';

export default function MushroomPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <MushroomCard />
      <a href="/mushroomcomparison" className="mt-4 text-blue-600 underline">
        Compare
      </a>
      <button className="mt-2 p-2 bg-green-600 text-white rounded-lg">
        Add to Favorites
      </button>
      <SimilarMatchList />
      <NavBar />
    </div>
  );
}
