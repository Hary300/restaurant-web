import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Footer from '@/components/ui/footer';
import { getRecommended } from '@/lib/api';
import { RecommendedResto } from '@/types/types';
import RecommendedList from '@/components/RecommendedList';

export default async function Home() {
  const recommended: RecommendedResto[] = await getRecommended();

  return (
    <div className='min-h-screen'>
      <Hero />
      <Menu />

      <RecommendedList data={recommended} />

      <Footer />
    </div>
  );
}
