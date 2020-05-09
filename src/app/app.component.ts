import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue']; 
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  usermodel = new User('Rob', 'rob123@hotmail.com', 1234567890, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.usermodel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      )
  }
}