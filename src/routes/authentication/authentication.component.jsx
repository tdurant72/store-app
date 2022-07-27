import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { motion } from "framer-motion";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0.3, ease: "easeIn", staggerChildren: 0.5 },
      }}
    >
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </motion.div>
  );
};

export default Authentication;
