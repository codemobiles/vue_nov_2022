<template>
  <div style="width: 100%; max-width: 1700px">
    <a-row>
      <a-col :span="state.selectedOrder == null ? 24 : 12">
        <a-table
          :customRow="customRow"
          :columns="state.headers"
          :data-source="state.mDataArray"
          :pagination="state.pagination"
          class="ant-table-striped"
          :rowClassName="
            (record:any, index:number) => (index % 2 === 1 ? 'table-striped' : null)
          "
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'transaction_id'">
              <span>{{ record.transaction_id }}</span>
            </template>

            <template v-if="column.key === 'timestamp'">
              <span>{{ $filters.formatDate(record.timestamp) }}</span>
            </template>
            <template v-if="column.key === 'order_list'">
              <a @click="openOrderLine(record.order_list)">{{
                JSON.parse(record.order_list).length
              }}</a>
            </template>

            <template v-if="column.key === 'total'">
              <span>{{ $filters.thousand(record.total) }}</span>
            </template>

            <template v-if="column.key === 'paid'">
              <span>{{ $filters.thousand(record.paid) }}</span>
            </template>

            <template v-if="column.key === 'payment_type'">
              <span>{{ record.payment_type }}</span>
            </template>
          </template>
        </a-table>
      </a-col>

      <a-col :span="state.selectedOrder != null ? 12 : 0">
        <ul>
          <li v-for="order in state.selectedOrder" :key="order.product_id">
            <img :width="50" :src="$filters.fullImageUrl(order.image)" />
            {{ order.name }}, {{ order.price }}
          </li>
        </ul>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import api from "@/services/api";
import type { Transaction } from "@/models/transaction.model";

interface ColumnProps {
  title: string;
  key: string;
}

interface TransactionState {
  mDataArray: Transaction[];
  headers: ColumnProps[];
  pagination: any;
  selectedOrder: any;
}

export default defineComponent({
  components: {},
  setup() {
    const state = reactive<TransactionState>({
      mDataArray: [],
      headers: [
        {
          title: "Id",
          key: "transaction_id",
        },
        { title: "Created", key: "timestamp" },
        { title: "Sku", key: "order_list" },
        { title: "Total", key: "total" },
        { title: "Paid", key: "paid" },
        { title: "Type", key: "payment_type" },
      ],
      selectedOrder: null,
      pagination: {
        total: 0,
        pageSize: 10, // Display 10 data per page
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "20", "50", "100"], // Displayed in each page
        showTotal: (Total: any) =>
          `Total data is displayed in ${Total} strip data`, // paging
      },
    });

    const openOrderLine = (data: string) => {
      // alert(JSON.stringify(data));
      state.selectedOrder = JSON.parse(data);
    };

    onMounted(() => {
      loadData();
    });

    const loadData = async () => {
      let result = await api.getTransactions();
      state.mDataArray = result.data;
      state.pagination.total = state.mDataArray.length;
    };

    const customRow = (record: any) => {
      return {
        onClick: (event: any) => {
          state.selectedOrder = JSON.parse(record.order_list);
        },
      };
    };

    return {
      openOrderLine,
      state,
      customRow,
    };
  },
});
</script>
<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
