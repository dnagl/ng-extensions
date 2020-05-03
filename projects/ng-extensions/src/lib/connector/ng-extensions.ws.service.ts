import {ObjectUnsubscribedError, Observable, Observer, Subject} from 'rxjs';
import {AnonymousSubject} from 'rxjs/internal-compatibility';

export abstract class WebSocketClient {

  protected constructor(protected url: string) {
  }

  private subject: Subject<MessageEvent>;

  public connect(): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create();
    }

    return this.subject;
  }

  protected create(): Subject<MessageEvent> {
    const ws = new WebSocket(this.url);

    const observable = new Observable((observer: Observer<MessageEvent>) => {
      ws.onmessage = observer.next.bind(observer);
      ws.onerror = observer.next.bind(observer);
      ws.onclose = observer.next.bind(observer);
      return ws.close.bind(ws);
    });

    const observer: Observer<MessageEvent> = {
      complete() {
      },
      error(p1: any) {
      },
      next: (data: object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };

    return new AnonymousSubject(observer, observable);
  }

}
