import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";


const SocialLogin = () => {
    const{signInWithGoogle} = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.massage);
        })
    }
    return (
        <div>
            <button className="btn w-full" onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};
export default SocialLogin;