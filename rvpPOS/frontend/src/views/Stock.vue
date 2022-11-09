<template>
  <div style="width: 100%; max-width: 1700px">
    <div
      style="
        display: flex;
        margin-bottom: 16px;
        flex-direction: row;
        align-items: center;
      "
    >
      <a-input-search
        placeholder="input search text"
        enter-button
        @search="onSearch"
      />
      <a-divider type="vertical" />
      <a-button @click="$router.push('/stock-create')" type="primary">
        Create
      </a-button>
    </div>

    <a-table
      :columns="state.headers"
      :data-source="state.mDataArray"
      :pagination="state.pagination"
      class="ant-table-striped"
      :rowClassName="
            (record:any, index:number) => (index % 2 === 1 ? 'table-striped' : null)
          "
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'product_id'">
          <span>{{ record.product_id }}</span>
        </template>
        <template v-if="column.key === 'image'">
          <a-image
            :width="50"
            v-bind:src="filters.fullImageUrl(record.image)"
          />
        </template>
        <template v-if="column.key === 'name'">
          {{ record.name }}
        </template>

        <template v-if="column.key === 'price'">
          <span>{{ filters.currency(record.price) }}</span>
        </template>

        <template v-if="column.key === 'stock'">
          <span>{{ filters.thousand(record.stock) }}</span>
        </template>

        <template v-else-if="column.key === 'action'">
          <span>
            <a-divider type="vertical" />
            <EditOutlined
              style="font-size: 30px"
              class="pr-7 text-slate-800"
              @click="$router.push(`/stock-edit/${record.product_id}`)"
            />

            <a-popconfirm
              title="Are you sure？"
              @confirm="onConfirmDelete(record.product_id)"
            >
              <template #icon
                ><question-circle-outlined style="color: red"
              /></template>
              <DeleteOutlined style="font-size: 30px; color: red" />
            </a-popconfirm>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import api from "@/services/api";
import filters from "@/services/filters";
import {
  DeleteOutlined,
  QuestionCircleOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: { DeleteOutlined, QuestionCircleOutlined, EditOutlined },
  setup() {
    const state = reactive({
      search: "",
      selectedProductId: "",
      selectedProduct: null,
      confirmDeleteDlg: false,
      mDataArray: [],
      headers: [
        {
          title: "Id",
          align: "left",
          sortable: false,
          key: "product_id",
        },
        { title: "Image", key: "image" },
        { title: "Name", key: "name" },
        { title: "Price", key: "price" },
        { title: "Stock", key: "stock" },
        { title: "Action", key: "action" },
      ],
      pagination: {
        total: 0,
        pageSize: 7, // Display 10 data per page
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "20", "50", "100"], // Displayed in each page
        showTotal: (Total: any) =>
          `Total data is displayed in ${Total} strip data`, // paging
      },
    });

    onMounted(() => {
      loadProducts();
    });

    const onSearch = async (value: any) => {
      if (value) {
        let result = await api.getProductByKeyword(value);
        state.mDataArray = result.data;
      } else {
        loadProducts();
      }
    };

    const onConfirmDelete = async (id: any) => {
      await api.deleteProduct(id);
      loadProducts();
    };

    const loadProducts = async () => {
      let result = await api.getProducts();
      state.mDataArray = result.data;
    };

    return {
      state,
      filters,
      onSearch,
      onConfirmDelete,
    };
  },
});
</script>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
