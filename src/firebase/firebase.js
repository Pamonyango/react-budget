import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBUS-Wp2I-c4T_rsulvwQtRxi1vPRErpC4",
  authDomain: "budget-firebase.firebaseapp.com",
  databaseURL: "https://budget-firebase.firebaseio.com",
  projectId: "budget-firebase",
  storageBucket: "budget-firebase.appspot.com",
  messagingSenderId: "811969901495",
  appId: "1:811969901495:web:dcc212a8e4873f12aeee32"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref("expenses").push({
  description: "Rent",
  note: "",
  amoun: 109500,
  createdAt: 976123498763
});

database.ref("expenses").push({
  description: "Phone bill",
  note: "",
  amoun: 5900,
  createdAt: 976123498763
});
database.ref("expenses").push({
  description: "food",
  note: "",
  amoun: 1200,
  createdAt: 976123498763
});

// const database = firebase.database();

// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Mark Zuckerberg",
//     location: {
//       city: "Kisumu",
//       country: "Kenya"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("Data failed to save", e);
//   });
database.ref().on("value", snapshot => {
  const val = snapshot.val();
  console.log(val);
});
// database.ref().ref.update({
//   "location/city": "Mombasa"
// });
