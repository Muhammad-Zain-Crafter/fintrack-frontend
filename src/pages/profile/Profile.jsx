import { useState } from "react";
import { User, KeyRound } from "lucide-react";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-6">

      {/* Header */}
      <h1 className="text-2xl font-semibold text-white mb-6">
        Profile Settings
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-border mb-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 pb-3 text-sm ${ 
            activeTab === "profile"
              ? "text-white border-b-2 border-primary"
              : "text-muted"
          }`}
        >
          <User size={18} />
          Edit Profile
        </button>

        <button
          onClick={() => setActiveTab("password")}
          className={`flex items-center gap-2 pb-3 text-sm ${
            activeTab === "password"
              ? "text-white border-b-2 border-primary"
              : "text-muted"
          }`}
        >
          <KeyRound size={18} />
          Change Password
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "profile" && <EditProfile />}
        {activeTab === "password" && <ChangePassword />}
      </div>

    </div>
  );
};

export default Profile;