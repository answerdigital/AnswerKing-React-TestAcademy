import { OrderDto } from 'dtos/Order/OrderDto';
import { ReactElement } from 'react';
import { FormatDate } from 'utilities/FormatDate';
import { GBPFormat } from 'utilities/GBPFormat';

interface OrdersCardProps {
  order: OrderDto;
}

export const OrdersCard = ({ order }: OrdersCardProps): ReactElement => {
  return (
    <div className="mt-2 w-full rounded-lg bg-white px-6 pt-6">
      <div className="w-full border-y-2 border-gray-100">
        {order.lineItems.map((lineItem) => (
          <div key={lineItem.product.id} className="py-2">
            {lineItem.quantity}x {lineItem.product.name}
          </div>
        ))}
      </div>
      <div className="my-2 flex justify-between pb-4 font-light">
        <span className="text-xs">{FormatDate(order.createdOn)}</span>
        <span>Sale {GBPFormat.format(order.orderTotal)}</span>
      </div>
    </div>
  );
};