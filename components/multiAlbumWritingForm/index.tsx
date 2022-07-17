import {
	MultiAlbumSubmitButton,
	MultiAlbumTitle,
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
import axios, { AxiosResponse } from "axios";
import { API_HOST } from "apis/api";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
const MultiAlbumWriting = () => {
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [Images, setImages] = useState<SingleImage[] | null>();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const userSelector = useSelector(selectUser);
	const { userId } = userSelector;
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
			console.log(Images);
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
						<UploadCard key={image.file.name} src={image.thumbnail} width={300} height={400} />
					</ShowImages>
				))}
			</UploadSlider>
		);
	}, [Images]);
	const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setTitle(e.target.value);
	}, []);
	const handleChangeContent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		setContent(e.target.value);
	}, []);

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formdata = new FormData();
		if (Images) {
			Images.forEach((f) => {
				formdata.append("multiImage", f.file);
			});
		}

		axios
			.post(`${API_HOST}/multiAlbum/uploadMultiAlbumImage`, formdata, { withCredentials: true })
			.then((res: AxiosResponse) => {
				console.log("첫번째", res.data);
				const imagesUrl = res.data;
				const data = {
					title: title,
					content: content,
					userId: userId,
					imagepath: imagesUrl,
				};
				axios.post(`${API_HOST}/multiAlbum/uploadMultiAlbumContent`, data, { withCredentials: true }).then((res) => {
					console.log("두번 응답", res);
				});
			});
	};

	return (
		<MultiAlbumWritingFormContainer>
			<MultiAlbumWritingForm encType="multipart/form-data" onSubmit={handleSubmitForm}>
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
				<MultiAlbumTitle
					placeholder="제목을 입력해주세요"
					id="multiImagetitle"
					name="multiImagetitle"
					onChange={handleChangeTitle}
				/>
				<MultiAlbumWritingDescription
					placeholder="추억에 대해 적어주세요"
					id="multiImageDescription"
					name="multiImageDescription"
					onChange={handleChangeContent}
				></MultiAlbumWritingDescription>
				<MultiAlbumSubmitButton type="submit">글쓰기</MultiAlbumSubmitButton>
			</MultiAlbumWritingForm>
		</MultiAlbumWritingFormContainer>
	);
};

export default MultiAlbumWriting;
