export class ViewAlbumModel {
  constructor(
    public title: string,
    public image: string,
    public year: number,
    public author: string,
    public categories: object
  ) {}
}
