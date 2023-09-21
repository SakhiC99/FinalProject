import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Library } from './librarys';

@Injectable({
  providedIn: 'root'
})
export class LibraryService
 {
private url = "http://localhost:9001/library/view";
constructor(private http : HttpClient) { }
getbooks(): Observable<Library[]>
{
  return this.http.get<Library[]>(`${this.url}`);
}


 private inserturl = "http://localhost:9001/library/insert";
 public insertbook(bookdata: any)
 {
   return this.http.post(this.inserturl,bookdata);
 } 

 private deleteurl = "http://localhost:9001/library/delete";
 public deletebook(bookdata: number)
 {
  return this.http.post(this.deleteurl,bookdata);
 }
 
 private updateurl = "http://localhost:9001/library/update";
 public updatebook(bookdata: any) 
 {
  return this.http.post(this.updateurl,bookdata);
 }
}