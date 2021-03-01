import AbstractService from './abstractService';

class Timetables extends AbstractService {
  static Columns = ['id', 'comment', 'roomId', 'lecturerId', 'subjectId', 'coursesId'];
  static Table = 'timetables';

  id: number;
  comment: string;
  roomId: number;
  lecturerId: number;
  subjectId: number;
  coursesId: number;
}

export default Timetables;
