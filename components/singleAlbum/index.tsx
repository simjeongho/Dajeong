import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import {
	BestSingleAlbumForm,
	BestSingleAlbumImage,
	BestSingleAlbumInput,
	BestSingleAlbumSubmitButton,
	BestSingleAlbumTitle,
	BestSingleAlbumYear,
	WritingSingleAlbumContainer,
	ShowImageContainer,
	BestSingleAlbumDescriptionInput,
	EmptyImage,
	BestSingleAlbumTitleInput,
} from "./styled";
import axios from "axios";
import { useRouter } from "next/router";
type SingleImage = {
	file: File;
	thumbnail: string;
	type: string;
};

const SingleAlbumWrites = () => {
	const [singleImage, setSingleImage] = useState<SingleImage | null>();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const router = useRouter();

	const handleClickFileInput = () => {
		fileInputRef.current?.click();
	};
	const uploadSingleImage = (e: ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;
		if (fileList && fileList[0]) {
			const url = URL.createObjectURL(fileList[0]);
			setSingleImage({
				file: fileList[0],
				thumbnail: url,
				type: fileList[0].type.slice(0, 5),
			});
		}
	};

	const showImage = useMemo(() => {
		if (!singleImage && singleImage == null) {
			return <EmptyImage onClick={handleClickFileInput}>이미지를 업로드하려면 클릭하세요</EmptyImage>;
		}
		return (
			<ShowImageContainer>
				<BestSingleAlbumImage
					width={300}
					height={400}
					objectFit="cover"
					src={singleImage.thumbnail}
					alt={singleImage.type}
					onClick={handleClickFileInput}
				/>
			</ShowImageContainer>
		);
	}, [singleImage]);
	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title === "" || description === "") {
			return alert("제목과 내용 모두 채워주세요");
		}
		const formdata = new FormData();
		if (singleImage) {
			formdata.append("title", title);
			formdata.append("content", description);
			formdata.append("singleImage", singleImage.file);
			axios
				.post("/singleAlbum/uploadImage", formdata)
				.then((response) => {
					alert("글 작성이 완료되었습니다.");
					console.log(response);
					router.push("/Album");
				})
				.catch((error) => {
					alert("글 작성에 실패하였습니다.");
					console.log(error);
				})
				.then(function () {});
		}
	};
	useEffect(() => {});

	return (
		<WritingSingleAlbumContainer>
			<BestSingleAlbumForm onSubmit={handleSubmitForm} encType="multipart/form-data">
				{showImage}
				<BestSingleAlbumInput
					type="file"
					id="singleImage"
					name="singleImage"
					accept="image/*"
					ref={fileInputRef}
					onChange={uploadSingleImage}
				></BestSingleAlbumInput>
				<BestSingleAlbumTitleInput
					placeholder="사진의 제목이 무엇인가요?"
					value={title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setTitle(e.target.value);
					}}
				></BestSingleAlbumTitleInput>

				<BestSingleAlbumDescriptionInput
					type="text"
					id="bestalbumdescription"
					name="bestalbumdescription"
					placeholder="추억에 대해 설명해주세요"
					value={description}
					autoFocus
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setDescription(e.target.value);
					}}
				></BestSingleAlbumDescriptionInput>
				<BestSingleAlbumSubmitButton type="submit" value="submit">
					Upload
				</BestSingleAlbumSubmitButton>
			</BestSingleAlbumForm>
		</WritingSingleAlbumContainer>
	);
};

export default SingleAlbumWrites;
