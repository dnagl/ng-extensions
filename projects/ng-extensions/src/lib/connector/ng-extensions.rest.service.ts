import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class AbstractRestService<T> {

  protected constructor(protected httpClient: HttpClient, protected endpointUrl: string) {
  }

  public create(obj: T): Observable<T>{
    return this.httpClient.post<T>(this.endpointUrl, obj);
  }

  public update(obj: T): Observable<T>{
    return this.httpClient.put<T>(this.endpointUrl, obj);
  }

  public delete(obj: T): Observable<T>{
    return this.httpClient.delete<T>(this.endpointUrl, obj);
  }

  public read(id: any): Observable<T>{
    return this.httpClient.get<T>(this.endpointUrl + '/' + id);
  }

  public list(): Observable<Array<T>>{
    return this.httpClient.get<Array<T>>(this.endpointUrl);
  }

}
