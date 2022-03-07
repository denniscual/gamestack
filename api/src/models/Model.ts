import db from '../db';

export default class Model<T extends { id: number } = { id: number }> {
  rows: T[] = [];

  constructor(collectionName: string) {
    // @ts-expect-error There is an type error when assigning the value.
    this.rows = db[collectionName];
  }

  findById(id: number): T | null {
    const foundRow = this.rows.find((row) => row.id === id);
    return foundRow ? foundRow : null;
  }

  findAll(): T[] {
    return this.rows;
  }
}
