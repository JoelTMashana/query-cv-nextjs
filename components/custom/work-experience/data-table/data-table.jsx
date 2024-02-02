"use client"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AddIcon from "../../icons/add-icon"

export function DataTable({
  columns,
  data,
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const {
    getState,
    getCanPreviousPage,
    getCanNextPage,
    previousPage,
    nextPage,
  } = table;
  
  const { pageIndex } = getState();

  return (
    <div className="mx-auto  lg:container">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl sm:text-4xl  font-semibold">Work Experience</h1>
            <Link href="/upload-workexperience/manual-entry" className="bg-[#678fe6] p-1 rounded">
                < AddIcon className="w-5 h-5 text-white" />
            </Link>
        </div>
        <div className="rounded-md border">
            <Table>
                <TableCaption>A list of your work experience.</TableCaption>
                <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                        <TableHead key={header.id}>
                            {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                                )}
                        </TableHead>
                        )
                    })}
                    </TableRow>
                ))}
                </TableHeader>
                <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                    <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                    >
                        {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                        ))}
                    </TableRow>
                    ))
                ) : (
                    <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                        No results.
                    </TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
        </div>

        {/** Handles Pagination */}
        <div className="flex items-center justify-end space-x-2 py-4">
            <Button
                variant="outline"
                size="sm"
                onClick={() => previousPage()}
                disabled={!getCanPreviousPage()}
            >
                Previous
            </Button>

            {/* Pagination Counting */}
            <span>
                Page{' '}
                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>

            <Button
                variant="outline"
                size="sm"
                onClick={() => nextPage()}
                disabled={!getCanNextPage()}
            >
                Next
            </Button>
        </div>
    </div>
  )
}
