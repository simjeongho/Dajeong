import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import {
	BestSingleAlbumForm,
	BestSingleAlbumImage,
	BestSingleAlbumInput,
	BestSingleAlbumSubmitButton,
	BestSingleAlbumTitle,
	BestSingleAlbumYear,
} from "./styled";
import axios from "axios";
type SingleImage = {
	file: File;
	thumbnail: string;
	type: string;
};

const BestSingleAlbum = () => {
	const [BestSuriImage, setBestSuriImage] = useState<SingleImage | null>();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleClickFileInput = () => {
		fileInputRef.current?.click();
	};
	const uploadProfile = (e: ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;
		const length = fileList?.length;
		if (fileList && fileList[0]) {
			const url = URL.createObjectURL(fileList[0]);
			setBestSuriImage({
				file: fileList[0],
				thumbnail: url,
				type: fileList[0].type.slice(0, 5),
			});
		}
	};

	const showImage = useMemo(() => {
		if (!BestSuriImage && BestSuriImage == null) {
			return <button>비어있음</button>;
		}
		return (
			<BestSingleAlbumImage
				width={100}
				height={100}
				src={BestSuriImage.thumbnail}
				alt={BestSuriImage.type}
				onClick={handleClickFileInput}
			/>
		);
	}, [BestSuriImage]);
	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formdata = new FormData();
		if (BestSuriImage) {
			formdata.append("bestSingleAlbum", BestSuriImage.file);
			axios
				.post("/api/suri", formdata)
				.then((response) => {
					alert("요청 성공");
					console.log(response);
				})
				.catch((error) => {
					alert("요청 실패");
					console.log(error);
				})
				.then(function () {});
		}
	};
	useEffect(() => {});

	return (
		<>
			{showImage}
			<BestSingleAlbumForm onSubmit={handleSubmitForm} encType="multipart/form-data">
				<BestSingleAlbumInput
					type="file"
					id="bestsingle"
					name="bestsingle"
					accept="image/*"
					ref={fileInputRef}
					onChange={uploadProfile}
				/>
				<BestSingleAlbumTitle></BestSingleAlbumTitle>
				<BestSingleAlbumYear></BestSingleAlbumYear>
				<BestSingleAlbumSubmitButton type="submit" value="submit">
					제출
				</BestSingleAlbumSubmitButton>
			</BestSingleAlbumForm>
		</>
	);
};

export default BestSingleAlbum;
