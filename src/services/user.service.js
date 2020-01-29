export default class {
  async list() {
    try {
    const userResponse = [{"id":"0001","name":"mama","address":"ygn","phone":"1212222","DOB":"12/11/2000"},{"id":"0002","name":"su","address":"mdy","phone":"1212222","DOB":"11/11/2000"},{"id":"3","name":"rose","address":"ygn","phone":"133212222","DOB":"12/20/2000"}]
      return userResponse;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}
