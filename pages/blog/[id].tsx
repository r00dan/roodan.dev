import { useEffect } from 'react';
import { useRouter } from 'next/router';
import s from '../../styles/Post.module.css';

export default function Post() {
  const router = useRouter();
  const { id, image } = router.query;
  useEffect(() => {
    document.title = `Post #${id}`
  }, []);
  return (
    <div className={s.post}>
      <h2>Some good title</h2>
      {
        image && (
          <img src={image} alt="post-image" />
        )
      }
      <div className={s.text}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit ab pariatur quaerat nesciunt sit aut sequi totam, quo, vel quisquam, eligendi possimus similique. Modi provident similique deserunt excepturi commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit ab pariatur quaerat nesciunt sit aut sequi totam, quo, vel quisquam, eligendi possimus similique. Modi provident similique deserunt excepturi commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit ab pariatur quaerat nesciunt sit aut sequi totam, quo, vel quisquam, eligendi possimus similique. Modi provident similique deserunt excepturi commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit ab pariatur quaerat nesciunt sit aut sequi totam, quo, vel quisquam, eligendi possimus similique. Modi provident similique deserunt excepturi commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit ab pariatur quaerat nesciunt sit aut sequi totam, quo, vel quisquam, eligendi possimus similique. Modi provident similique deserunt excepturi commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit ab pariatur quaerat nesciunt sit aut sequi totam, quo, vel quisquam, eligendi possimus similique. Modi provident similique deserunt excepturi commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores velit ab pariatur quaerat nesciunt sit aut sequi totam, quo, vel quisquam, eligendi possimus similique. Modi provident similique deserunt excepturi commodi.</p>
      </div>

      <div className={s.date}>
        {new Date().toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  )
}
