import { TbLogout2 } from "react-icons/tb";
import useSignOut from "../../hoocks/useSignOut";
const LogOut = () => {
  const { loading, signOut } = useSignOut();
  return (
    <div className="mt-auto">
      {!loading ? (
        <TbLogout2
          className="w-6 h-6 text-white cursor-pointer"
          onClick={signOut}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogOut;
