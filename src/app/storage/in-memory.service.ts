import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    const members = [
      { firstname: 'Kingsley', name: 'Owusu-Sekyere', id: '1' },
      { firstname: 'Matthias', name: 'Blex', id: '2' },
      { firstname: 'Martin', name: 'Kaniut', id: '3' }
    ];
    return { members };
  }
}

export const IN_MEMORY_DB = HttpClientInMemoryWebApiModule.forRoot(InMemoryService, { dataEncapsulation: false });
