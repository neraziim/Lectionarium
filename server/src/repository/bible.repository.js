export class BibleRepository {
  #prisma;

  constructor({ prisma }) {
    this.#prisma = prisma;
  }
  findVerse(book, chapter, verse) {
    return this.#prisma.bible.findFirst({
      where: { book: book, chapter: Number(chapter), verse: Number(verse) },
    });
  }

  findChapter(book, chapter) {
    return this.#prisma.bible.findMany({
      where: {
        book: book,
        chapter: Number(chapter),
      },
      orderBy: { verse: 'asc' },
    });
  }
}
