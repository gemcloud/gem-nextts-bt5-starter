// //Sample
// // import { initializeApp } from "firebase/app"; // no compat for new SDK
// // import { getDatabase, ref } from "firebase/database";

// // const config = {
// //   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// //   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
// //   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
// // };

// // const app = initializeApp(config);

// // const database = getDatabase(app);

// // export const todosRef = ref(database, "posts");

// import {
//   collection,
//   deleteDoc,
//   doc,
//   DocumentData,
//   getDocs,
//   limit,
//   query,
//   QueryDocumentSnapshot,
//   updateDoc,
//   where
// } from "@firebase/firestore";
// import { getDatabase, ref } from "firebase/database";
// import { app } from "../../firebase/clientApp";

// const database = getDatabase(app);

// export const getPosts = async () => {
//   const todosCollection = ref(database, "posts");

//   const getTodos = async () => {
//     const todosQuery = query(todosCollection, where("done", "==", false), limit(10));
//     const querySnapshot = await getDocs(todosQuery);
//     const result: QueryDocumentSnapshot<DocumentData>[] = [];
//     querySnapshot.forEach(snapshot => {
//       result.push(snapshot);
//     });
//     setTodos(result);
//   };

//   //   const posts = await firebase
//   //     .database()
//   //     .ref("/posts")
//   //     .orderByChild("dateCreated")
//   //     .once("value")
//   //     .then(snapshot => {
//   //       const snapshotVal = snapshot.val();

//   //       const result = [];
//   //       for (var slug in snapshotVal) {
//   //         const post = snapshotVal[slug];
//   //         result.push(post);
//   //       }

//   //       return result.reverse();
//   //     });

//   return posts;
// };
