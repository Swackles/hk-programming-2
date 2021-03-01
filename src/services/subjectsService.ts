import AbstractService from './abstractService';

class Subjects extends AbstractService {
  static Columns = ['id', 'name', 'code'];
  static Table = 'subjects';

  name: string;
  code: string;
}

export default Subjects;
