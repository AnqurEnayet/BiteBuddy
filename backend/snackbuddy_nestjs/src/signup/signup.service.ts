import { HttpException, HttpStatus, Injectable, Response } from '@nestjs/common';
import { CreateSignupDto } from './createSignup.dto';
import { db } from '../firebase.config';
import { CollectionReference, DocumentData } from 'firebase-admin/firestore';
import { response } from 'express';

@Injectable()
export class SignupService {
  private usersCollection: CollectionReference<DocumentData>;

  constructor() {
    this.usersCollection = db.collection('users');
  }

  async create(createSignupDto: CreateSignupDto): Promise<any> {

    try {

      const usedEmail = await this.usersCollection.where('email', '==', createSignupDto.email).get();
      const usedUsername = await this.usersCollection.where('username', '==', createSignupDto.username).get();
      
      if(!usedEmail.empty && !usedUsername.empty){
        return {used: true, message: `Email and username both are already in use`};
        
      } else if(!usedEmail.empty){
        return {used: true, message: `Email is already in use`};
        
      } else if(!usedUsername.empty){
        return {used: true, message: `Username is already in use`};
        
      } else {
        const docRef = await this.usersCollection.add(createSignupDto);
        return {used: false, message: `User registered with ID: ${docRef.id}`};
      }
      
      
    } catch (error) {
      throw new Error('Error adding document: ' + error.message);
    }
  }
}
