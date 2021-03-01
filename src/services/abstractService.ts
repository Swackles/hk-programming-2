interface Value {
  column: string,
  value: string
}

abstract class AbstractService {
  static Columns: string[];
  static Table: string;

  id: number;
  
  constructor(data: object) {
    for (const column of this.getColumns()) {
      const value = (<any>data)[column];
      if (value == null) continue;

      (<any>this)[column] = value;
    }
  }

  static findAll(): string {
    return `SELECT ${this.Columns.join(", ")} FROM ${this.Table}`;
  }

  static find(id: number): string {
    return `SELECT ${this.Columns.join(", ")} FROM ${this.Table} WHERE id = ${id}`;
  }

  save(): string {
    if (this.id != undefined) return this.update();

    const columns: string[] = [];
    let values: string[] = [];

    for (const column of this.getColumns().filter(x => x != 'id')) {
      const value = (<any>this)[column];
      if (value === undefined || value === null) continue;
      
      if (value.constructor.name == 'String') values.push(`'${value}'`);
      else values.push(value);

      columns.push(column);
    }

    return `INSERT INTO ${this.getTable()} (${columns.join(', ')})	VALUES (${values.join(', ')});`
  }

  update(): string {
    let setValues: string[] = [];

    for (let column of this.getColumns()) {
      if (column == 'id') continue;

      let value = (<any>this)[column];

      if (value.constructor.name == 'String') value = `'${value}'`;

      setValues.push(`${column} = ${value}`)
    }
  
    return `UPDATE ${this.getTable()} SET ${setValues.join(', ')} WHERE id = ${this.id}`;
  }  

  delete(): string {
    return `DELETE FROM ${this.getTable()} WHERE id = ${this.id}`;
  }

  private getTable(): string {
    return (this.constructor as typeof AbstractService).Table;
  }

  private getColumns(): string[] {
    return (this.constructor as typeof AbstractService).Columns;
  }
}

export default AbstractService;
