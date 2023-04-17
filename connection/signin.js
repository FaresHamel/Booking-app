import auth from "./db";
import { signInWithEmailAndPassword } from "firebase/auth";

const singin = async (values) => {
  const email = values.email;
  const password = values.password;

  var result;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const uerIdTo = userCredential.user.getIdToken().then((idTo) => {
      //   removeData();
      //   storeData(idTo);
      // });
      result = true;
    })
    .catch((error) => {
      result = error.code;
    });

  return result;
};

export default singin;
