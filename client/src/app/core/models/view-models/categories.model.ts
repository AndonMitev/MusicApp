export class ViewCategoriesModel {
  constructor(
    public title: string,
    public imageUrl: string,
    public likes: [string],
    public description: string
  ) {}
}
