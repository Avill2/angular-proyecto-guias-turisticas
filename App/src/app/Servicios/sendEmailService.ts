import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactForm} from '../contactForm';
import {Observable} from 'rxjs';

@Injectable()
export class SendEmailService {
  type: any;
  constructor( private http: HttpClient) { }
  getResponseEmail(_body: ContactForm): Observable<any>{
    // this.http.post('/send.php',_body).subscribe(data =>{
    //   console.log(data);
    //   this.type = JSON.stringify(data);
    // });
    return this.http.post('/send.php',_body);
  }
}
