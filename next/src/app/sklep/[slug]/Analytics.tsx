'use client';
import { useEffect } from 'react';

export default function Analytics({
  item_id,
  item_name,
}: {
  item_id: string;
  item_name: string;
}) {
  useEffect(() => {
    if (!item_name || !item_id) return;
    window.dataLayer?.push({
      event: 'view_item',
      items: [
        {
          item_id: item_id,
          item_name: item_name,
          quantity: 1,
        },
      ],
    });
  }, [item_name, item_id]);

  return null;
}
