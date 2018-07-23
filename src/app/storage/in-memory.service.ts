import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    const members = [
      { firstname: 'Kingsley', name: 'Owusu-Sekyere' },
      { firstname: 'Matthias', name: 'Blex' },
      { firstname: 'Martin', name: 'Kaniut' }
    ];
    return { members };
  }
}

export const IN_MEMORY_DB = HttpClientInMemoryWebApiModule.forRoot(InMemoryService, { dataEncapsulation: false });
