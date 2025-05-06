import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './createLoginDto';
import { CollectionReference, DocumentData } from 'firebase-admin/firestore';
import { db } from '../firebase.config'

@Injectable()
export class LoginService {
    private readonly usersData: CollectionReference<DocumentData>

    constructor() {
        this.usersData = db.collection('users')
    }

    async check(createLoginDto: CreateLoginDto): Promise<any> {
        try {

            const emailExists = await this.usersData.where('email', '==', createLoginDto.email).get();
            const passwordExists = await this.usersData.where('password', '==', createLoginDto.password).get();

            if (emailExists.empty && passwordExists.empty) {
                return { used: false, message: `Wrong email and password` };

            } else if (emailExists.empty) {
                return { used: false, message: `Email is wrong` };

            } else if (passwordExists.empty) {
                return { used: false, message: `Password is wrong` };

            } else {
                const userSnapshot = await this.usersData
                    .where('email', '==', createLoginDto.email)
                    .where('password', '==', createLoginDto.password)
                    .limit(1) // Assuming email and password combination is unique
                    .get();

                if (!userSnapshot.empty) {
                    const user = userSnapshot.docs[0].data();
                    return { used: true, username: user.username };
                }
            }


        } catch (error) {
            throw new Error('Error adding document: ' + error.message);
        }
    }

}
