// WysiwygEditor.js

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { useRef } from "react";

const MyToastgEditor = () => {
	const editorRef = useRef(null);
	const toolbarItems = [
		["heading", "bold", "italic", "strike"],
		["hr"],
		["ul", "ol", "task"],
		["table", "link"],
		["image"],
		["code"],
		["scrollSync"],
	];
	return (
		<>
			<Editor
				ref={editorRef}
				initialValue="" // 글 수정 시 사용
				initialEditType="wysiwyg" // wysiwyg & markdown
				hideModeSwitch={true}
				height="80vh"
				theme={""} // '' & 'dark'
				usageStatistics={false}
				toolbarItems={toolbarItems}
				plugins={[colorSyntax]}
			/>
		</>
	);
};
export default MyToastgEditor;
