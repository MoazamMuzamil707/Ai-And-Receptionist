// "use client"
// import dynamic from 'next/dynamic';
// import React, { useEffect, useState } from 'react';
// import ReactQuill from 'react-quill';
// import RichTextEditor from 'react-rte';
// import 'react-quill/dist/quill.snow.css';

// // const RichTextEditor = dynamic(() => import('react-rte'), { ssr: false });

// const TextEditor = ({ onChange, editorvalue, col, name, label, required, disabled }) => {
//   const [value, setValue] = useState(RichTextEditor.createEmptyValue());

//   useEffect(() => {
//     if (editorvalue) {
//       if (Array.isArray(editorvalue)) {
//         const htmlContent = formatText(editorvalue);
//         setValue(RichTextEditor.createValueFromString(htmlContent, 'html'));
//       } else if (editorvalue && typeof editorvalue === 'string') {
//         setValue(RichTextEditor.createValueFromString(editorvalue, 'html'));
//       } else {
//         setValue(RichTextEditor.createEmptyValue());
//       }
//     }
//   }, [editorvalue]);

//   function formatText(arr) {
//     return arr.map((item, index) => {
//       let formattedItem = item
//         // Replace newline characters (\n) with <br><br> for line breaks
//         .replace(/\n/g, '<br>')

//         // Italics: _text_ to <em>text</em>
//         .replace(/_(.*?)_/g, '<em>$1</em>')

//         // Bold: *text* to <strong>text</strong>
//         .replace(/\*(.*?)\*/g, '<strong>$1</strong>')

//         // Strikethrough: ~text~ to <del>text</del>
//         .replace(/~(.*?)~/g, '<del>$1</del>')

//         // Monospace: ```text``` to <code>text</code>
//         .replace(/```(.*?)```/g, '<code>$1</code>')

//         // Inline code: `text` to <code>text</code>
//         .replace(/`(.*?)`/g, '<code>$1</code>')

//         // Blockquote: > text to <blockquote>text</blockquote>
//         .replace(/^>\s+(.*)/gm, '<blockquote>$1</blockquote>')

//         // Bulleted list: * or - text to <ul><li>text</li></ul>
//         .replace(/^[*-]\s+(.*)/gm, '<ul><li>$1</li></ul>')

//         // Numbered list: 1. text to <ol><li>text</li></ol>
//         .replace(/^\d+\.\s+(.*)/gm, '<ol><li>$1</li></ol>');

//       // Add <br> after each item except the last one
//       return index !== arr.length - 1 ? formattedItem + '<br>' : formattedItem;
//     }).join('');
//   }

//   const handleChange = (value) => {
//     setValue(value);
//     if (onChange) {
//       onChange(value.toString('html'));
//     }
//   };

//   return (

//     <div className={`col-md-${col} mb-3`}>
//       <label htmlFor={name} className="form-label">
//         {label}
//         {required && <span className="text-danger">*</span>}
//       </label>
//         <ReactQuill
//           theme="snow"
//           value={value}
//           onChange={handleChange}
//           disabled={disabled}
//         />


//     </div>

//   );
// };

// export default TextEditor;


"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = ({ onChange, editorvalue, col, name, label, required, disabled }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (editorvalue) {
      if (Array.isArray(editorvalue)) {
        const htmlContent = formatText(editorvalue);
        setValue(htmlContent);
      } else if (typeof editorvalue === 'string') {
        setValue(editorvalue);
      } else {
        setValue('');
      }
    }
  }, [editorvalue]);

  function formatText(arr) {
    return arr
      .map((item, index) => {
        let formattedItem = item
          .replace(/\n/g, '<br>')
          .replace(/_(.*?)_/g, '<em>$1</em>')
          .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
          .replace(/~(.*?)~/g, '<del>$1</del>')
          .replace(/```(.*?)```/g, '<code>$1</code>')
          .replace(/`(.*?)`/g, '<code>$1</code>')
          .replace(/^>\s+(.*)/gm, '<blockquote>$1</blockquote>')
          .replace(/^[*-]\s+(.*)/gm, '<ul><li>$1</li></ul>')
          .replace(/^\d+\.\s+(.*)/gm, '<ol><li>$1</li></ol>');

        return index !== arr.length - 1 ? formattedItem + '<br>' : formattedItem;
      })
      .join('');
  }

  function convertHtmlToMarkdown(arr) {
    return arr
      .map((item) => {
        let markdownItem = item
          .replace(/<span[^>]*class="ql-cursor"[^>]*><\/span>/g, '')
          .replace(/<br\s*\/?>/g, '\n')
          .replace(/<em>(.*?)<\/em>/g, '_$1_')
          .replace(/<strong>(.*?)<\/strong>/g, '*$1*')
          .replace(/<del>(.*?)<\/del>/g, '~$1~')
          .replace(/<code>(.*?)<\/code>/g, '`$1`')
          .replace(/<blockquote>(.*?)<\/blockquote>/g, '> $1')
          .replace(/<ul>\s*<li>(.*?)<\/li>\s*<\/ul>/g, '* $1')
          .replace(/<ol>\s*<li>(.*?)<\/li>\s*<\/ol>/g, '1. $1')
          .replace(/<\/?p>/g, '')
          .replace(/<\/?[^>]+(>|$)/g, '')
          .trim();
  
        return markdownItem;
      })
      // .join('\n')
  }
  
  const handleChange = (content) => {
    setValue(content);
    if (onChange) {
      const markdownContent = convertHtmlToMarkdown(content.split('\n'));
      onChange(name, markdownContent);
    }
  };
  
  return (
    <div className={`col-md-${col} mb-3`}>
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        readOnly={disabled}
      />
    </div>
  );
};

export default TextEditor;


