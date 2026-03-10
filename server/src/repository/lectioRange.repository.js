export class LectioRangeRepository {
  #prisma;

  constructor({ prisma }) {
    this.#prisma = prisma;
  }

  findById(id) {
    return this.#prisma.lectioRange.findUnique({
      where: { id: Number(id) },
    });
  }

  findByLectionarium(Lectionarium) {
    return this.#prisma.lectioRange.findMany({
      where: { Lectionarium: Lectionarium },
    });
  }
}
