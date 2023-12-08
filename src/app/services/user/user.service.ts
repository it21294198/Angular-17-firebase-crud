// user.service.ts

import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  
  private firebaseApp: FirebaseApp | undefined;
  private firestore: Firestore | undefined;
  
  constructor(firebaseApp: FirebaseApp, firestore: Firestore) {
    this.firebaseApp = firebaseApp;
    this.firestore = firestore;
  }
  
  async getAllUsers(): Promise<any[]>{
    const userCollection = collection(this.firestore!,'users');
    const userQuery = query(userCollection);
    const querySnapshot = await getDocs(userQuery);
    const users: any[] = [];
    querySnapshot.forEach((element: { data: () => any; }) => {
      users.push(element.data())
    });
    return users;
  }

  async deleteUser(id: any) {
    throw new Error('Method not implemented.');
  }
  
  async createUser(userData: any): Promise<void> {
    try {
      const usersCollection = collection(this.firestore!, 'users'); // Use '!' to assert non-nullability
      await addDoc(usersCollection, userData);
      console.log('User document successfully created!');
    } catch (error) {
      console.error('Error creating user document: ', error);
    }
  }
}
