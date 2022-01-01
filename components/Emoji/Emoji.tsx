import Image from 'next/image'
import {
  GrinningIcon,
  CryingIcon,
  LmaoIcon,
  ShokedIcon,
  SmartIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from '../../public/icons';

type EmojiTypes = 'with_tear' |
  'cry' |
  'lmao' |
  'shoked' |
  'smart' |
  'thumbs_up' |
  'thumbs_down';

interface IEmoji {
  name: EmojiTypes;
  size?: number;
  offset?: string | number;
}

enum Icons {
  WITH_TEAR = "with_tear",
  CRY = "cry",
  LMAO = "lmao",
  SHOKED = "shoked",
  SMART = "smart",
  THUMS_UP = "thumbs_up",
  THUMS_DOWN = "thumbs_down",
}

type IconsMap = {
  [key: string]: StaticImageData;
};

const iconsMap: IconsMap = {
  [Icons.WITH_TEAR]: GrinningIcon,
  [Icons.CRY]: CryingIcon,
  [Icons.LMAO]: LmaoIcon,
  [Icons.SHOKED]: ShokedIcon,
  [Icons.SMART]: SmartIcon,
  [Icons.THUMS_UP]: ThumbsUpIcon,
  [Icons.THUMS_DOWN]: ThumbsDownIcon,
};

export function Emoji({ name, size=24, offset=0 }: IEmoji) {
  return (
    <div style={{ display: 'flex', marginLeft: `${typeof offset === 'number' ? offset + 'px' : offset}` }}>
      <Image
        src={iconsMap[name as Icons]}
        alt='emoji'
        width={size}
        height={size}
      />
    </div>
  )
}
