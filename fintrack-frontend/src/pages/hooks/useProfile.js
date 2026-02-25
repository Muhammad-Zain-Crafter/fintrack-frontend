import { useEffect, useState } from "react";
import API from "../../services/api";

const useProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("api/v1/expense-tracker/users/profile");
        console.log(res.data.data);
        setUser(res.data.data);
      } catch (err) {
        console.error("Profile fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { user, loading };
};

export default useProfile;