import { CaretSortIcon, ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Etch, EtchOwnership } from "@/gql/graphql";
import { shortenAddress } from "@/utils/hooks/address";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Loader2, TagIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Skeleton } from "./ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { deterministicTextToColor } from "@/lib/utils";
import { DataTableFacetedFilter } from "./ui/faceted-filter-data-table";

dayjs.extend(relativeTime);

type EtchColumnDef = { headerName?: string } & ColumnDef<Etch>;

export const columns: EtchColumnDef[] = [
  // {
  //   id: "select",
  //   headerName: "Selector",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "tokenId",
    header: "ID",
    headerName: "ID",
    cell: ({ row }) => {
      return <div className="capitalize">{row.getValue("tokenId") ?? <Skeleton className="h-3 w-3" />}</div>;
    },
  },
  {
    accessorKey: "documentName",
    headerName: "Document Name",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row, column, table }) => (
      <div className="flex gap-2">
        <Link className="hover:underline" href={`/dashboard/etches/${row.getValue("tokenId")}`}>
          {row.getValue("documentName") ?? <Skeleton className="h-3 w-8" />}
        </Link>
        {row.original.tagLinks
          ?.filter((el) => el?.tag?.label && el.tag.label.length > 0)
          .map((el) => (
            <Badge
              key={el?.tag?.id || el?.tag?.label}
              style={{ backgroundColor: deterministicTextToColor(el?.tag?.label ?? "") }}
              className="cursor-pointer font-bold hover:bg-opacity-50 hover:underline "
              onClick={(e) => {
                table
                  .getColumn("tag")
                  ?.setFilterValue([...((table.getColumn("tag")?.getFilterValue() as string[]) || []), el?.tag?.label]);
                e.stopPropagation();
              }}
            >
              <TagIcon className="mr-1 h-3 w-3" />
              {el?.tag?.label}
            </Badge>
          )) ?? <Skeleton className="h-3 w-8" />}
      </div>
    ),
  },
  {
    accessorKey: "tag",
    headerName: "Tag",
    header: ({ column }) => <></>,

    filterFn: (row, _, filterValue) => {
      return ((filterValue as string[]) || []).every((filter) =>
        row.original.tagLinks?.some((tag) => tag?.tag?.label === filter)
      );
    },
    cell: ({ row, column }) => <></>,
  },
  {
    accessorKey: "createdAt",
    headerName: "Created At",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Created At
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {row.getValue("createdAt") ? (
            dayjs().to(dayjs(Number(row.getValue("createdAt")) * 1000))
          ) : (
            <Skeleton className="h-3 w-6" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "ownership",
    headerName: "Owner",
    header: () => <div className="text-right">Owner</div>,
    cell: ({ row }) => {
      const ownership: EtchOwnership = row.getValue("ownership");

      if (ownership?.team && ownership?.team?.name) {
        return (
          <Link href={`/dashboard/teams/${ownership?.team?.teamId}`}>
            <div className="cursor-pointer text-right font-medium hover:underline">{ownership?.team?.name}</div>
          </Link>
        );
      } else
        return (
          <Link href={`/dashboard/users/${ownership?.owner?.id}`}>
            <div className="cursor-pointer text-right font-medium hover:underline">
              {ownership?.owner?.id ? (
                ownership?.owner?.etchENS?.[0]?.name ?? shortenAddress({ address: ownership?.owner?.id })
              ) : (
                <Skeleton className="ml-auto h-3 w-12" />
              )}
            </div>
          </Link>
        );
    },
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const etch = row.original;

  //     return (
  //       <div className="flex justify-end">
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant="ghost" className="h-8 w-8 p-0">
  //               <span className="sr-only">Open menu</span>
  //               <DotsHorizontalIcon className="h-4 w-4" />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end">
  //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //             <DropdownMenuItem onClick={() => navigator.clipboard.writeText(etch.tokenId)} className="cursor-pointer">
  //               Copy Etch ID
  //             </DropdownMenuItem>
  //             {/* <DropdownMenuItem onClick={() => router.push("/editEtch")} className="cursor-pointer">Edit Etch</DropdownMenuItem> */}
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       </div>
  //     );
  //   },
  // },
];

export function DataTable({ data = [], isLoading }: { data: Etch[]; isLoading?: boolean }) {
  const [sorting, setSorting] = React.useState<SortingState>([{ id: "createdAt", desc: true }]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 20,
  });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-5 py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="shadow-4xl">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="font-body capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {(column?.columnDef as EtchColumnDef).headerName || column?.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DataTableFacetedFilter
            column={table.getColumn("tag")}
            title="Tag"
            options={data
              ?.flatMap((el) => el?.tagLinks ?? [])
              .filter((el): el is NonNullable<typeof el> => el !== null && el !== undefined)
              .map((el) => el?.tag?.label)
              .filter((label): label is string => typeof label === "string" && label.length > 0)
              .filter((el, i, arr) => arr.indexOf(el) === i)
              .map((tag) => ({ label: tag, value: tag }))}
          />
        </DropdownMenu>
        <Input
          placeholder="Filter etches..."
          value={(table.getColumn("documentName")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("documentName")?.setFilterValue(event.target.value)}
          className="ml-auto max-w-sm rounded-none border-none shadow-4xl"
        />

        {/* <CreateEtchButton className="shadow-etched-2" /> */}
      </div>
      <div className="rounded-md shadow-etched-1">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  <div className="flex items-center justify-center">
                    <Loader2 className="animate-spin text-primary" />
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="hover:bg-muted hover:bg-opacity-50"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="cursor-pointer" key={cell.id}>
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
