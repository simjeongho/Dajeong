import {
	MultiAlbumSubmitButton,
	MultiAlbumWritingDescription,
	MultiAlbumWritingForm,
	MultiAlbumWritingFormContainer,
	MultiAlbumWritingImage,
	ShowMultipleImage,
} from "./styled";
import React, { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import { SingleImage } from "components/singleAlbumWritingForm";
import UploadSlider from "components/uploadCarousel";
import UploadCard from "components/UploadCard";
import { ShowImages } from "components/UploadCard/styled";
const MultiAlbumWriting = () => {
	const [text, setText] = useState<string>("");
	const [Images, setImages] = useState<SingleImage[] | null>();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleClickFileInput = () => {
		fileInputRef.current?.click();
	};
	const uploadMultiImages = (e: ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;
		const multiImageList: SingleImage[] = [];
		if (fileList && fileList[0]) {
			for (let i = 0; i < fileList.length; i++) {
				const url = URL.createObjectURL(fileList[i]);
				multiImageList.push({
					file: fileList[i],
					thumbnail: url,
					type: fileList[i].type.slice(0, 5),
				});
			}
			if (multiImageList.length > 10) {
				multiImageList.slice(0, 10);
			}
			setImages(multiImageList);
		}
	};

	const showImages = useMemo(() => {
		if (!Images && Images == null) {
			return <ShowMultipleImage onClick={handleClickFileInput}>이미지를 업로드하려면 클릭하세요</ShowMultipleImage>;
		}
		return (
			<UploadSlider title="미리 보기">
				{Images.map((image) => (
					<ShowImages onClick={handleClickFileInput}>
						<UploadCard src={image.thumbnail} width={300} height={400} />
					</ShowImages>
				))}
			</UploadSlider>
		);
	}, [Images]);
	const handleChangeDescription = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			e.preventDefault();
			setText(e.target.value);
		},
		[text],
	);

	return (
		<MultiAlbumWritingFormContainer>
			<MultiAlbumWritingForm encType="multipart/form-data">
				{showImages}
				<MultiAlbumWritingImage
					ref={fileInputRef}
					type="file"
					id="multiImage"
					name="multiImage"
					accept="image/*"
					multiple
					hidden
					onChange={uploadMultiImages}
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
