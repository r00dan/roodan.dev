import { useRouter } from 'next/router';
import { Developing } from '../../components/Developing/Developing';
import Custom404 from '../404';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isFallback) {
    return <Custom404 />
  }

  return (
    <div>
      <h3>Title</h3>
      <Developing />
    </div>
  )
}
