
import app from './app.js'

import {getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function btnSubscribetohellfireclube(subscription){

  const db = getFirestore(app)
  const hellfireclubecollection = collection(db, '/hellfire-clube')
  const docref = await addDoc(hellfireclubecollection, subscription)
  return docref.id
}