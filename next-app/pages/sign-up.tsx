import {
  SignIn,
  UnderButtonContent,
  UnderButtonProps,
} from "../components/SignIn";

const underButtonLinks: UnderButtonProps = {
  link1: {
    href: "#",
    text: "Forgot Password?",
  },
  link2: {
    text: "Already Have an Account? Log In",
    href: "#",
  },
};

function SignUp() {
  return (
    <SignIn
      title="Sign Up"
      buttonText="Sign Up"
      underButtonContentProps={underButtonLinks}
    />
  );
}

export default SignUp;
