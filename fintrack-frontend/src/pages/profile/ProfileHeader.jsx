import { User } from "lucide-react";
import useProfile from "../hooks/useProfile";

const ProfileHeader = () => {
  const { user, loading } = useProfile();

  if (loading) {
    return (
      <div className="flex items-center gap-3 mb-10 animate-pulse">
        <div className="w-12 h-12 rounded-full bg-border" />
        <div>
          <div className="h-4 w-24 bg-border rounded mb-2" />
          <div className="h-3 w-16 bg-border rounded" />
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex items-center gap-3 mb-10">
      {/* User Icon */}
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
        <User className="w-6 h-6 text-primary" />
      </div>

      {/* User Info */}
      <div>
        <h4 className="font-semibold leading-tight">
          {user.fullname}
        </h4>
        <p className="text-sm text-muted">
          @{user.username}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;