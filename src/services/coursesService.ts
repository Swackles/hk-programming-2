import AbstractService from './abstractService';

class Courses extends AbstractService {
  static Columns = ['id', 'name'];
  static Table = 'courses';

  name: string;
}

export default Courses;
