export class CalendariumRepository {
  #prisma;
  constructor({ prisma }) {
    this.#prisma = prisma;
  }
  findById(id) {
    return this.#prisma.calendarium.findUnique({
      where: { id: Number(id) },
    });
  }

  findByCode(code) {
    return this.#prisma.calendarium.findUnique({
      where: { code: code },
    });
  }

  findBySeason(season) {
    return this.#prisma.calendarium.findMany({
      where: { season: season },
    });
  }
}
