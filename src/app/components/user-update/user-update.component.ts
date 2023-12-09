import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
  
  @Input() id:number = 0;
  @Input() isOpen:boolean = false;
  @Output() updateUserEvent = new EventEmitter<number>();

  isDialogOpen : boolean  = false
  
  closeDialog():void {
    this.isDialogOpen= false;
  }
  updateUser() {
    console.log('updated id:',this.updateUserEvent);
    
  }

  openDialog() {
    this.isDialogOpen = true;
  }
}
