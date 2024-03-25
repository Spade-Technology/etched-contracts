import React from "react";
import { useForm } from "react-hook-form";
import { Product, ProductListProps } from "@/stripeTypes";
import { Table, TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products || products.length === 0) return null;
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Table>
        <TableRow key="header" className="bg-gray-50">
          <TableCell>Product Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Quantity</TableCell>
        </TableRow>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>
              <Input {...register(`${product.id}`)} />
            </TableCell>
          </TableRow>
        ))}
        <TableRow className="w-full">
          <TableCell colSpan={3} className="text-right">
            <Button type="submit">
              Submit
            </Button>
          </TableCell>
        </TableRow>
      </Table>
    </form>
  );
};

export default ProductList;
