import {
	MultiAlbumSubmitButton,
	MultiAlbumWritingDescription,
	MultiAlbumWritingForm,
	MultiAlbumWritingFormContainer,
	MultiAlbumWritingImage,
	ShowMultipleImage,
} from "./styled";
import React, { useCallback, useRef, useState } from "react";

const MultiAlbumWriting = () => {
	const [text, setText] = useState<string>("");
	const fileInputRef = useRef<HTMLInputElement>(null);
	const uploadImage = () => {
		fileInputRef.current?.click();
	};

	const handleChangeDescription = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		setText(e.target.value);
	}, []);

	return (
		<MultiAlbumWritingFormContainer>
			<MultiAlbumWritingForm encType="multipart/form-data">
				<ShowMultipleImage onClick={uploadImage}>이미지를 업로드 하려면 클릭하세요</ShowMultipleImage>
				<MultiAlbumWritingImage
					ref={fileInputRef}
					type="file"
					id="multiImage"
					name="multiImage"
					accept="image/*"
					multiple
					hidden
				></MultiAlbumWritingImage>
				<MultiAlbumWritingDescription
					placeholder="추억에 대해 적어주세요"
					id="multiImageDescription"
					name="multiImageDescription"
					onChange={handleChangeDescription}
				></MultiAlbumWritingDescription>
				<MultiAlbumSubmitButton>글쓰기</MultiAlbumSubmitButton>
			</MultiAlbumWritingForm>
		</MultiAlbumWritingFormContainer>
	);
};

export default MultiAlbumWriting;
