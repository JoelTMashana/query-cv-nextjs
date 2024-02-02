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
import WorkExperienceFormModal from "../work-experience-form-modal"
import Link from "next/link"

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
        deleteExperience(row.original.experience_id);
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
            <Link href="/upload-workexperience/manual-entry">
              <DropdownMenuItem>
                Add
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

]
