/**
 * Defines an object that associates properties with
 * instances of `NewsItem`.
 *
 * @publicApi
 */
export interface NewsItem {
    id: number,
    title: string,
    text: string,
    author: string, // Type of this field should be "User"
    category: string, // Type of this field should be "Category"
    creationDate: Date,
    publishingDate: Date,
    shortText: string,
    largeImageUrl: string,
    mediumImageUrl: string,
    smalImageUrl: string,
    sourceLink: string,
    shortDescription: string,
    link: string,
}