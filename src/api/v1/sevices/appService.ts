export class PlantsService {
  public getCreatedDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const yaer = date.getFullYear();
    return `${day}/${month}/${yaer}`;
  }
}
