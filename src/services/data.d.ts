export type Category = {
	category: string,
	words: string[],
};

declare module "../data/comments.json" {
	const value: CommentsData;
	export default value;
}
