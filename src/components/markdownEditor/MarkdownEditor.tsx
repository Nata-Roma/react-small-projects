import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './markdownEditor.css';

export const MarkdownEditor = () => {
  const [markdown, setMarkDown] = useState('# Start');

  const onMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkDown(e.target.value);
  };

  return (
    <div className='markdown-container'>
      <textarea
        onChange={onMarkdownChange}
        value={markdown}
        className='markdown-area textarea'
      />
      <ReactMarkdown children={markdown} className='markdown-area' />
    </div>
  );
};
