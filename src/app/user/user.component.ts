import { Component, EventEmitter, Input, Output, /* output, input, computed, signal */ } from '@angular/core'; // Added signal for dynamic updating of properties - since Angular 16 and above
import { User } from './user.model';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// Usage of type alias - used for all
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //selectedUser = DUMMY_USERS[randomIndex] // usage of zone.js - since Angular 2 and above
  
  // The use of Input and the required configuration decorator - Angular 2 and above
  @Input({ required: true }) user!: User; // Type alias User

  @Input({ required: true }) selected!: boolean;
    
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // The use of Output decorator
  @Output() select = new EventEmitter<string>();

  // Usage of zone.js by using a getter function to return the relative path of the image
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // The use of the output function - used in newer versions of Angular 
// select = output<string>();

  // Usage of signals
  // avatar = input.required<string>();
  // name = input.required<string>();

// usage of signals and computed - more efficient to use for checking updates - since Angular 16 and above
  // selectedUser = signal(DUMMY_USERS[randomIndex]); 
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectedUser() {
    this.select.emit(this.user.id);
    
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex]; // Used in Angular 2 and above
  }
}
