import { useEffect, useState } from "react";
import { Gem, Sparkles } from "lucide-react";
import { Protect, useAuth } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const {getToken} = useAuth()

  const getDashboardData = async () => {
    try {
      const {data} = await axios.get('/api/user/get-user-creations',{headers: {Authorization: `Bearer ${await getToken()}`}})

      if(data.success){
        setCreations(data.creations)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setLoading(false)
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full px-2 sm:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-6 mb-8 pt-4">
        {/* Total creation card */}
        <div className="flex-1 clean-card p-6 flex justify-between items-center bg-white">
          <div>
            <p className="text-sm font-medium text-text-muted mb-1">Total Creations</p>
            <h2 className="text-3xl font-bold text-text-main">{creations.length}</h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex justify-center items-center">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
        
        {/* Active plan card */}
        <div className="flex-1 clean-card p-6 flex justify-between items-center bg-white">
          <div>
            <p className="text-sm font-medium text-text-muted mb-1">Active Plan</p>
            <h2 className="text-3xl font-bold text-text-main flex items-center gap-2">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>
            </h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex justify-center items-center">
            <Gem className="w-6 h-6" />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-surface border-t-primary"></div>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-text-main mt-8 mb-4">Recent Creations</h2>
          {creations.length > 0 ? (
            creations.map((item) => (
              <CreationItem key={item.id} item={item} content={creations.content} />
            ))
          ) : (
            <div className="text-center py-16 clean-card bg-surface-hover border-dashed">
              <p className="text-text-muted font-medium">No creations yet.</p>
              <p className="text-sm text-text-muted mt-1 font-light">Start building amazing content from the sidebar tools.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
