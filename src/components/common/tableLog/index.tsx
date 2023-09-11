import React from 'react'
import invoices from '@/data/json/invoices.json'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components"
type Props = {}

export const TableLog = (props: Props) => {
    return (
        <div>
            <Table>
                <TableCaption>A list of Logs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-1/3">Date</TableHead>
                        <TableHead className="w-1/3">Hour</TableHead>
                        <TableHead className="w-1/3">Note</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{new Date().toDateString()}</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>This is a place holder</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableLog
