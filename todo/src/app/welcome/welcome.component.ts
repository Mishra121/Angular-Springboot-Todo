import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  WelcomeMessage: string

  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    
    //Subscribe calls the api again and again using observable
    // this.welcomeDataService.executeHelloWorldBeanService().subscribe();
    // this.welcomeDataService.executeHelloWorldBeanService().subscribe();
    
    // Call wait for the response and the thread continue to next code 
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleError(error)
    );

    console.log('Last Line of get welcome message');
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
    
    //Subscribe calls the api again and again using observable
    // this.welcomeDataService.executeHelloWorldBeanService().subscribe();
    // this.welcomeDataService.executeHelloWorldBeanService().subscribe();
    
    // Call wait for the response and the thread continue to next code 
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleError(error)
    );

    console.log('Last Line of get welcome message');
  }

  handleSuccessResponse(response) {
    // console.log(response);
    // console.log(response.message);
    this.WelcomeMessage = response.message;
  }

  handleError(error) {
    console.log(error);
  }
}
