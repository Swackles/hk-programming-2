import AbstractService from './abstractService';

class Rooms extends AbstractService {
  static Columns = ['id', 'name'];
  static Table = 'rooms';

  name: string;
}

export default Rooms;
