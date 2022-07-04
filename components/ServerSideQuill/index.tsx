import dynamic from "next/dynamic";

const ServerSideQuillEditor = dynamic(import("../Quilleditor/index"), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

export default ServerSideQuillEditor;
