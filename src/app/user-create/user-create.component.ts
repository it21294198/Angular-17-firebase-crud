import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {

  async deleteUser(id:any) {
    await this.userService.deleteUser(id);
    this.loadUsers();
  }

  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit():void{
    this.loadUsers();
  }

  async loadUsers(){
    this.users = await this.userService.getAllUsers();
  }

  async createUser() {
    const userData = { name: 'John Doe', email: 'john.doe@example.com' }; // Customize based on your user schema
    await this.userService.createUser(userData);
  }
}
