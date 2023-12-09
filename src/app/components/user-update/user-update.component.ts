import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
  @Input() isOpen = false;
  
  closeDialog():void {
    this.isOpen = false;
  }
  updateUser() {
  throw new Error('Method not implemented.');
  }
  isDialogOpen: any;
  openDialog() {
  throw new Error('Method not implemented.');
  }
}
