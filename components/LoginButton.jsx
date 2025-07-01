import Link from "next/link";

const LoginButton = () => {
  return (
    <div className="">
      <Link href={"request-demo"}>
        <button className="text-white bg-indigo-600 font-medium hover:bg-indigo-700 px-3 rounded-md w-full py-2 md:w-fit">
          LogIn
        </button>
      </Link>
    </div>
  );
};
export default LoginButton;
