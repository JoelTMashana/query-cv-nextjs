"use client"
import { DataTable } from "@/components/custom/work-experience/data-table/data-table";
import { columns } from "@/components/custom/work-experience/data-table/columns";
import useChatStore from "@/store/chatStore";
import axios from "@/lib/utils/axiosConfig";
import { useState, useEffect } from "react";

async function getData(userId) {
  try {
    const response = await axios.get(`/users/${userId}/experiences`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching the data:', error);
    return [];
  }
}

export default function Page() {
  const { user } = useChatStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user) {
      getData(user.user_id).then(fetchedData => {
        setData(fetchedData);
      });
    }
  }, [user]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
