import { API } from "../../../type/api";
import { Method } from "../../../type/method";

export class GetSystem extends API {
  constructor(params: { user_id: number; page: number; size: number }) {
    super("/site/notification/system", Method.GET, params, {});
  }
}
