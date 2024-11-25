import {Document} from 'mongoose';
import {Profile} from 'passport-google-oauth20';

interface IError extends Error {
  status: number;
}

interface IProfile extends Profile {
  confirmToken?: string;
}

interface IUser extends Document {
  id: string;
  email: string;
  password: string;
  confirmToken?: string;
  phoneNumber?: string;
  googleId?: string;
  role: number;
  isActive: boolean;
  comparePassword(enteredPassword: string): Promise<boolean>;
}

export type {IError, IProfile, IUser};
