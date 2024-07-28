
  
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  // import { getAuth ,onAuthStateChanged ,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  // import { getFirestore ,doc, setDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  // import { getStoreage ,ref, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storeage.js";
  
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDv5zScTg3GWURibLFCzLIVltW_VubccgY",
  //   authDomain: "my-fifth-project-70533.firebaseapp.com",
  //   projectId: "my-fifth-project-70533",
  //   storageBucket: "my-fifth-project-70533.appspot.com",
  //   messagingSenderId: "978193916167",
  //   appId: "1:978193916167:web:e74d30179e1558f305e5a2",
  //   measurementId: "G-7M7G2VZG7H"
  // };

  
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  // const db = getFirestore(app);
  // const storeage = getStoreage(app);
  // const analytics = getAnalytics(app);

  // export{
  //   auth, db, storeage ,onAuthStateChanged ,createUserWithEmailAndPassword, doc
  //    ,setDoc ,ref ,uploadBytes, getDownloadURL
  // }

  
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signout, getDoc,} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  import { getStorage, ref, uploadBytes, getDownloadURL   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDv5zScTg3GWURibLFCzLIVltW_VubccgY",
    authDomain: "my-fifth-project-70533.firebaseapp.com",
    projectId: "my-fifth-project-70533",
    storageBucket: "my-fifth-project-70533.appspot.com",
    messagingSenderId: "978193916167",
    appId: "1:978193916167:web:e74d30179e1558f305e5a2",
    measurementId: "G-7M7G2VZG7H"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db= getFirestore(app);
  const storage = getStorage(app);
  const analytics = getAnalytics(app);


  export{
    auth , db, storage, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc,
     ref, uploadBytes, getDownloadURL, signout, getDoc,
  };
