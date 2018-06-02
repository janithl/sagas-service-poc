import request from "../common/request";

export default class CountryService {
  static getCountryByCode(code) {
    return request(`alpha/${code}`);
  }
}
