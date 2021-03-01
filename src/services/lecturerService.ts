import AbstractService from './abstractService';

class Lecturer extends AbstractService {
  static Columns = ['id', 'name'];
  static Table = 'lecturers';

  name: string;
}

export default Lecturer;
