import dynamic from "next/dynamic";

const ToastEditor = dynamic(() => import("components/toastEditor"), {
	ssr: false,
	//loading: () => <Loader />
});

const BlogPostEditPage = () => {
	return <ToastEditor></ToastEditor>;
};

export default BlogPostEditPage;
