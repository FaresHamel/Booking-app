import auth from "./db";
import { createUserWithEmailAndPassword } from "firebase/auth";
// storage functions
// import { storeData } from "../../storage/storage";
const singup = async (values) => {
  const email = values.email;
  const password = values.password;

  var result;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
      result = true;
    })
    .catch((error) => {
      result = error.code;
    });
  return result;
};

export default singup;
