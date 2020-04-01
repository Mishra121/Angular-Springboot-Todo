import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Need to be defined if want to get the element of object using . operator
export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    // Created class used as generic to recieve message using . operator
    return  this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldServiceWithPathVariable(name){
    // Created class used as generic to recieve message using . operator
    return  this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}
