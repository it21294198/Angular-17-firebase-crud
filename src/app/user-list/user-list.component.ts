import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { UserUpdateComponent } from "../components/user-update/user-update.component";
import { LoadingComponent } from "../components/loading/loading.component";
import { LoadingService } from '../services/load/loading.service';

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [UserUpdateComponent, LoadingComponent]
})
export class UserListComponent {

  users: any[] = [];
  userId: number = 0;
  open:boolean = false;
  loading:boolean = false;
  
  constructor(private userService: UserService,private loadingService:LoadingService) {}
  
  ngOnInit():void{
    this.loadUsers();
    this.loadingService.isLoading$.subscribe((isLoading)=>{
        // console.log(isLoading);
        this.loading = isLoading;
    })
  }

  setLoadingAlternate(){
    const loadingValue = this.loading ? false: true;
    this.loadingService.setLoading(loadingValue);
    this.loadingService.isLoading$.subscribe((isLoading)=>{
        // console.log(isLoading);
        this.loading = isLoading;
    })
  }
  
  async loadUsers(){
    this.users = await this.userService.getAllUsers();
    console.log(this.users);
  }
  
  async createUser() {
    this.loadingService.setLoading(true)
    const userData = { id:new Date().getTime() ,name: 'Doe', email: 'john.doe@example.com' }; // Customize based on your user schema
    await this.userService.createUser(userData);
    this.loadUsers();
    this.loadingService.setLoading(false)
  }

  async updateUser(id: any) {
    // const name = null;
    // await this.userService.updateUser(id,name);
    this.userId = id;
    this.open = true;
    console.log(this.userId);
    
    this.loadUsers();
  }

  async deleteUser(id:any) {
    await this.userService.deleteUser(id);
    this.loadUsers();
  }
}
