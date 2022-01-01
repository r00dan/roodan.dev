import { NextPage } from 'next';
import { Emoji } from '../components/Emoji/Emoji';

const Custom404: NextPage = () => {
  return (
      <div className='error-404'>
        404 | Sorry could not find this page
        <Emoji
          name="smart"
          size={48}
          offset={10}
        />
      </div>
  )
}

export default Custom404;