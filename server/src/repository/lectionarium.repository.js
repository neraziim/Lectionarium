export class LectionariumRepository {
  #prisma;

  constructor({ prisma }) {
    this.#prisma = prisma;
  }

  findById(id) {
    return this.#prisma.lectionarium.findUnique({
      where: { id: Number(id) },
    });
  }

  findByCalendar({ calendarium }) {
    return this.#prisma.lectionarium.findMany({
      where: { calendarium: calendarium },
    });
  }
}
