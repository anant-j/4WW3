import { initializeApp } from 'firebase/app'
import {
  getStorage,
  ref,
  // uploadBytes,
  uploadString,
  getDownloadURL,
} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID,
}

const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp)

export async function uploadImage(file) {
  const time = new Date().getTime()
  const storageRef = ref(storage, `images/${time}`)
  let resultUrl = ''
  try {
    await uploadString(storageRef, file, 'base64')
    // await uploadBytes(storageRef, file)
    resultUrl = await getDownloadURL(storageRef)
  } catch (error) {
    console.log(error)
    return { success: false }
  }
  return { success: true, url: resultUrl }
}
