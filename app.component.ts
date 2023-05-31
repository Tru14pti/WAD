import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// getValue(arg0: string,arg1: string,arg2: string,arg3: string) {
// throw new Error('Method not implemented.');
// }
  title = 'Registration Form';

  displayname='';
  displayaddress='';
  displaycontact='';
  displayemail='';
  getValue(name:string, address:string, contact:string, email:string){
    this.displayname=name;
    this.displayaddress=address;
    this.displaycontact=contact;
    this.displayemail=email;
  }

}
