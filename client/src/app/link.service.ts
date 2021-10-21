import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Link } from './link';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}
  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(`${this.baseUrl}/get-links`);
  }
  addLink(url: string): Observable<Link> {
    return this.http.post<Link>(`${this.baseUrl}/add-link`, { fullUrl: url });
  }
  getShort(url: string): Observable<Link> {
    return this.http.get<Link>(`${this.baseUrl}/get-short?shortUrl=${url}`);
  }
}
