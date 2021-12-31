import { useRouter } from 'next/router';
import { Developing } from '../../components/Developing/Developing';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h3>Post #{id}</h3>
      <Developing />
    </div>
  )
}
