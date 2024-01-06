import { getAuth } from 'firebase/auth';
import firebase from '@/firebase/clientApp';

const auth = getAuth(firebase.getApp());

export default auth;
