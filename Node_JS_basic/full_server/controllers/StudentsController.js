import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const dbPath = process.argv[2];

    readDatabase(dbPath)
      .then((studentsByField) => {
        const output = ['This is the list of our students'];
        const sortedFields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        sortedFields.forEach((field) => {
          const names = studentsByField[field];
          output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        response.status(200).send(output.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = process.argv[2];

    readDatabase(dbPath)
      .then((studentsByField) => {
        const names = studentsByField[major] || [];
        response.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
