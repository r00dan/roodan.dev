import { Input } from './Input/Input';

export function PostForm() {
  return (
    <div>
      <Input
        type="text"
        id="title"
        label="Title"
      />
      <Input
        type="textarea"
        id="title"
        label="Content"
      />
    </div>
  )
}
