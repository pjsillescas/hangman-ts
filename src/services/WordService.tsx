import value from "../data/data.json";

export default class WordService {
	public getCategories(): string[] {
		return value.map(o => o.category);
	}

	public getCategoryWords(category: string): string[] {
		const categoryData = value.filter(o => o.category == category);
		return categoryData ? categoryData.map(o => o.words)[0] : [];
	}

	public getRandomWordFromCategory(category: string): string {
		const categoryData = this.getCategoryWords(category);
		const numWords = categoryData.length;
		return (numWords > 0) ? categoryData[Math.floor(Math.random() * numWords)] : "";
	}

	public getData() { return value; }
}