import React from "react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useStripeSubscriptionCreate } from "@/utils/hooks/useStripeBackendOperation";
import { Button } from "@/components/ui/button";
import { Table, TableCell, TableRow } from "@/components/ui/table";
import { ProductListProps } from "@/stripeTypes";

const StripeProductsListTable = (props: ProductListProps) => {
  const toast = useToast();
  const { products } = props;
  const { mutationCreateSubscription } = useStripeSubscriptionCreate();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const handleQuantityChange = (default_price: string, quantity: number) => {
    setQuantities((prevQuantities) => {
      return { ...prevQuantities, [default_price]: quantity };
    });
  };

  const handleCreateSubscription = async () => {
    const items = Object.entries(quantities).map(([priceId, quantity]) => ({
      priceId,
      quantity,
    }));
    if (items.length > 0) {
      const resp = await mutationCreateSubscription({ items });
    } else {
      toast.toast({
        title: "Error!",
        description: "You haven't specified any subscriptions!",
        variant: "destructive",
      });
    }
  };
  return (
    <>
      <Table>
        <TableRow key="header" className="bg-gray-50">
          <TableCell>Product Name</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
        {products?.map((product) => (
          <TableRow key={product.default_price}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>
              <input
                type="number"
                value={product?.id ? quantities[product.default_price] : 0} //why in the world is TS requiring this?
                onChange={(e) => product?.id && handleQuantityChange(product.default_price, parseInt(e.target.value))}
                min="0"
              />
            </TableCell>
          </TableRow>
        ))}
      </Table>
      <div className="flex justify-end">
        <Button onClick={handleCreateSubscription}>Create Subscription</Button>
      </div>
    </>
  );
};

export default StripeProductsListTable;
