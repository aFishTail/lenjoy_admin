import { convertToRaw, EditorState, ContentState } from 'draft-js';
import { useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './index.less';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
// import { topicEditorContent } from '@/../pages/topic/editor/context'
import { Editor } from 'react-draft-wysiwyg';
import { FileControllerCoverImport } from '@/services/swagger/FileControllerCoverImport';

const uploadImageCallBack = async (file: any)=>{
      const formData = new FormData()
      formData.append('file', file)
      const {data} = await FileControllerCoverImport(formData)
      console.log('上传图片', data,{data: {link: data.url}})
      return {data: {link: data.url}}
}


interface Props {
  value?: string;
  onChange?: (value: string) => void;
}

const MyEditor: React.FC<Props> = ({ value, onChange }) => {
  // const { setContent } = useContext(topicEditorContent)

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    console.log('value 初始值', value);
    if (!value) return
    const contentBlock = htmlToDraft(value);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      setEditorState(EditorState.createWithContent(contentState))
    }
  }, []);

  const onEditorStateChange = (state: typeof editorState) => {
    setEditorState(state);
    // const content = state.getCurrentContent();
    const html = draftToHtml(convertToRaw(state.getCurrentContent()));
    onChange?.(html);
    // setContent(html)
  };
  return (
    <article>
      <Editor
        editorState={editorState}
        toolbarClassName={styles['toolbar-class']}
        wrapperClassName={styles['wrapper-class']}
        editorClassName={styles['editor-class']}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'fontFamily',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            'embedded',
            'emoji',
            'image',
            'history',
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            urlEnabled: true,
            uploadEnabled: true,
            uploadCallback: uploadImageCallBack,
            previewImage: true,
            alt: { present: false, mandatory: false },
          },
        }}
      />
    </article>
  );
};
export default MyEditor;
