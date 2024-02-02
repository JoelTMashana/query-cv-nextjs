"use client"
import { useState, useEffect } from "react";
import useWorkExperienceStore from "@/store/useWorkExperienceStore";
import { DataTable } from "@/components/custom/work-experience/data-table/data-table";
import { columns } from "@/components/custom/work-experience/data-table/columns";
import useChatStore from "@/store/chatStore";
import axios from "@/lib/utils/axiosConfig";


// async function getData(userId) {
//   try {
//     const response = await axios.get(`/users/${userId}/experiences`);
//     return response.data; 
//   } catch (error) {
//     console.error('Error fetching the data:', error);
//     return [];
//   }
// }

export default function Page() {
  const { user } = useChatStore();
  // const [data, setData] = useState([]);
  const setExperiences = useWorkExperienceStore((state) => state.setExperiences);


  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const response = await axios.get(`/users/${user.user_id}/experiences`);
          setExperiences(response.data);
        } catch (error) {
          console.error('Error fetching work experiences:', error);
        }
      }
    };

    fetchData();
  }, [user, setExperiences]);

  const experiences = useWorkExperienceStore((state) => state.experiences);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={experiences} />
    </div>
  );
}
