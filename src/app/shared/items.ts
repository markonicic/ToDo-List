// to-do model
export class Item {
  id?: number;
  created?: string;
  content: string;
  done?: boolean;

  constructor(content) {
    this.content = content;
  }
}
