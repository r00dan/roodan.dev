import React, { useState } from 'react';
import { NextPage } from 'next';
import { PostForm } from '../components/PostForm';

const CreatePost: NextPage = () => {
  const [text, setText] = useState<string>('');

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }


  return (
    <>
      <div>
        {text}
      </div>
      <PostForm />
    </>
  )
}

export default CreatePost;