"use client"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useWorkExperienceStore from "@/store/useWorkExperienceStore"
import { deleteWorkExperience } from "@/services/workExperienceService"
import DeleteButton from "./delete-button"

export const columns = [
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "tenure",
    header: "Tenure",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "outcomes",
    header: "Outcomes",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const deleteExperience = useWorkExperienceStore(state => state.deleteExperience);
      
      const handleDelete = () => {
        if(row.original.experience_id) {
          deleteWorkExperience(row.original.experience_id)
        }
        deleteExperience(C);
      };
      const handleEdit = () => {
        const setEditingId = useWorkExperienceStore(state => state.setEditingId);
        setEditingId(row.original.experience_id);
        window.location.href = '/upload-workexperience/manual-entry';
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
              <DropdownMenuItem 
                onSelect={handleEdit}
                >
                    Edit
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },

  },
  {
    accessorKey: "edit",
    header: "Edit",
  },
  {
    accessorKey: "delete",
    header: "Delete",
    cell: ({ row }) => <DeleteButton experienceId={row.original.experience_id} />,
  },

]
