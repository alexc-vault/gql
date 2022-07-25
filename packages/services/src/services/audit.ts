import { UserAttributes } from './users';

export class AuditService {
  private readonly _events: string[];
  
  constructor(private readonly _requestId: string, private readonly _user?: UserAttributes) {
    this._events = [];
  }
  
  get events() {
    return this._events;
  }
  
  addEvent(event: string) {
    this._events.push(event);
  }
}
