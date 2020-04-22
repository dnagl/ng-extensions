import {ObjectUnsubscribedError, Observable, Observer, Subject} from "rxjs";
import {AnonymousSubject} from "rxjs/internal-compatibility";

//todo: example from https://tutorialedge.net/typescript/angular/angular-websockets-tutorial/

export abstract class WebSocketClient{

  protected constructor(protected url: string) {
  }

  private subject: Subject<MessageEvent>;

  public connect(): Subject<MessageEvent>{
    if(!this.subject){
      this.subject = this.create();
    }

    return this.subject;
  }

  protected create(): Subject<MessageEvent>{
    let ws = new WebSocket(this.url);

    let observable = new Observable((observer: Observer<MessageEvent>) => {
      ws.onmessage = observer.next.bind(observer);
      ws.onerror = observer.next.bind(observer);
      ws.onclose = observer.next.bind(observer);
      return ws.close.bind(ws);
    });

    let observer: Observer<MessageEvent> = {
      complete: function () {
      },
      error: function (p1: any) {
      },
      next: (data: Object) => {
        if(ws.readyState === WebSocket.OPEN){
          ws.send(JSON.stringify(data))
        }
      }
    };

    return new AnonymousSubject(observer, observable);
  }

}
