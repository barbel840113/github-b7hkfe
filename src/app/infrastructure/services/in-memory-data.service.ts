import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const forms = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
    ];

    const formsType = [
       {id : 1, type: 'datetimepicker', displayname : 'Date Time Picker', typecode : 100000},
       {id : 2, type: 'textfield', displayname : 'Text Field', typecode : 100002}
    ];

    const auth = {isLogged : true};
    return {forms, auth, formsType};
  }
}