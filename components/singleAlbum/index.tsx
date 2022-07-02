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
} from "./styled";
import axios from "axios";
type SingleImage = {
	file: File;
	thumbnail: string;
	type: string;
};

const SingleAlbumWrites = () => {
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
			<ShowImageContainer>
				<BestSingleAlbumImage
					width={300}
					height={400}
					objectFit="cover"
					src={BestSuriImage.thumbnail}
					alt={BestSuriImage.type}
					onClick={handleClickFileInput}
				/>
			</ShowImageContainer>
		);
	}, [BestSuriImage]);
	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formdata = new FormData();
		if (BestSuriImage) {
			formdata.append("bestSingleAlbum", BestSuriImage.file);
			axios
				.post("/test/singleImageTest", formdata)
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
		<WritingSingleAlbumContainer>
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
				<BestSingleAlbumDescriptionInput
					type="text"
					id="bestalbumdescription"
					name="bestalbumdescription"
					placeholder="추억에 대해 설명해주세요"
					autoFocus
				></BestSingleAlbumDescriptionInput>
				<BestSingleAlbumSubmitButton type="submit" value="submit">
					Upload
				</BestSingleAlbumSubmitButton>
			</BestSingleAlbumForm>
		</WritingSingleAlbumContainer>
	);
};

export default SingleAlbumWrites;
