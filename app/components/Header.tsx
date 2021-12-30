import { Link } from "remix";
import { User } from "~/utils/contracts";

type HeaderProps = {
  user: User;
};

export default function Header({ user }: HeaderProps) {
  return (
    <nav className="bg-sky-500 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-1 px-2 h-[60px]">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Payload
        </Link>

        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={`${user.username}'s discord avatar`}
            className="rounded-full border border-gray-500 w-[50px] h-[50px]"
          />
        </div>
      </div>
    </nav>
  );
}
