/**
 * Created by Jeff on 8/24/2017.
 */
export class DeleteObject     {
  _id: string;
  toggle: boolean;

  constructor(_id: string, toggle: boolean)  {
    this._id = _id;
    this.toggle = toggle;
  }
}
