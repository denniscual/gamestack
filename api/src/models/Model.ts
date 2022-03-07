export default class Model<T extends { id: number }> {
  rows: T[] = [];

  constructor(rows: T[]) {
    this.rows = rows;
  }

  findById(id: number): T | null {
    const foundRow = this.rows.find((row) => row.id === id);
    return foundRow ? foundRow : null;
  }

  findByAll(): T[] {
    return this.rows;
  }
}
