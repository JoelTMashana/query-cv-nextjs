import { DataTable } from "@/components/custom/work-experience/data-table/data-table";
import { columns } from "@/components/custom/work-experience/data-table/columns";


async function getData() {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }
  ]
}

export default async function  Page() {
  const data = await getData()
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
