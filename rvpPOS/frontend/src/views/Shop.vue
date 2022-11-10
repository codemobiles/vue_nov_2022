<template>
  <a-row style="width: 100%; max-width: 1700px">
    <a-col :span="16" class="wrap" style="max-height: 80vh; overflow-y: scroll">
      <a-row style="width: 100%">
        <a-col
          :span="8"
          v-for="(item, index) in mDataArray"
          :class="item.qty > 0 ? 'border-solid border border-green-700' : null"
          @click="pushNewOrder(item)"
          :key="index"
        >
          <a-card style="height: 240px; display: flex; flex-direction: column">
            <div
              style="
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              "
            >
              {{ item.name }}
            </div>

            <div class="flex flex-row justify-between">
              <div class="text-gray-400">
                D{{ item.product_id }} / ฿{{ item.price }}
              </div>

              <div v-if="item.qty > 0" class="flex flex-row align-middle">
                <ShoppingCartOutlined
                  style="font-size: 25px; margin-right: 8px"
                />
                <div class="text-xl">{{ item.qty }}</div>
              </div>
            </div>

            <div class="w-full text-center">
              <a-image
                :preview="false"
                :src="filters.fullImageUrl(item.image)"
                style="width: 150px; height: 150px"
              />
            </div>
          </a-card>
        </a-col>
      </a-row>
    </a-col>

    <a-col :span="8" class="wrap" style="max-height: 80vh; overflow-y: scroll">
      <!-- Tax -->
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-left: 20px;
          padding-right: 20px;
        "
      >
        <div>
          <b style="font-size: 20px; font-weight: 100">Tax 7%</b>
        </div>
        <div>
          <span>
            <b style="font-size: 18px; font-weight: 100"
              >{{ $filters.currency(mTaxAmt) }}
            </b>
          </span>
        </div>
      </div>

      <!-- Grand-total -->
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-left: 20px;
          padding-right: 20px;
        "
      >
        <div>
          <b style="font-size: 20px; margin-right: 16px">Total</b>
          <DeleteOutlined
            @click="clearOrders"
            v-if="mOrderArray.length > 0"
            style="font-size: 20px"
          />
        </div>
        <div>
          <span>
            <b style="font-size: 27px; color: red"
              >{{ $filters.currency(mTotalPrice) }}
            </b>
          </span>
        </div>
      </div>

      <Payment
        @onCancel="onClear"
        @onChange="onPaymentResult"
        v-if="mOrderArray.length > 0"
        :totalNumber="mTotalPrice"
        :order_list="JSON.stringify(mOrderArray)"
      >
        <template v-slot:title>
          <h1 class="bg-orange-500 text-center text-white rounded-md">
            ยอดชำระ
          </h1>
        </template>

        <template #payment_btn>
          <ShoppingCartOutlined class="text-lg" />
        </template>
      </Payment>

      <!-- Waiting order image-->
      <div
        v-if="mOrderArray.length == 0"
        style="
          height: 80%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        "
      >
        <img
          src="@/assets/waiting_for_sale.png"
          style="height: 200px; width: 200px"
        />
      </div>

      <!-- Order lines -->
      <div style="max-height: 70vh; overflow-y: scroll">
        <a-card
          v-for="(item, index) in mOrderArray"
          :key="index"
          bodyStyle="padding-top:8px; padding-bottom:8px;"
        >
          <div class="flex flex-row flex-unwrap align-middle">
            <img
              :src="$filters.fullImageUrl(item.image)"
              style="width: 100px"
            />

            <div style="flex-grow: 1">
              <div>{{ item.name }}</div>
              <div>
                {{ $filters.currency(item.price) }} x {{ item.qty }} pcs.
              </div>
            </div>
            <DeleteOutlined
              style="font-size: 30px; color: red"
              @click="removeOrder(item)"
            />
          </div>
        </a-card>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import api from "@/services/api";
import Payment from "@/views/Payment.vue";
import { onMounted, ref, reactive, defineComponent } from "vue";
import {
  StarOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons-vue";
import filters from "@/services/filters";

export default defineComponent({
  components: { StarOutlined, DeleteOutlined, ShoppingCartOutlined, Payment },
  setup() {
    const mDataArray = ref<any[]>([]);
    const mOrderArray = ref<any[]>([]);
    const mChange = ref(0);
    const mTaxAmt = ref(0);
    const mPayment_dialog = ref(false);
    const mTotalPrice = ref(0);

    onMounted(() => {
      loadProducts();
    });

    const countSumPrice = () => {
      mTotalPrice.value = 0;
      for (let item of mOrderArray.value) {
        mTotalPrice.value += item.price * item.qty;
      }
      mTaxAmt.value = mTotalPrice.value * 0.07;
    };

    const removeOrder = (selectedItem: any) => {
      var index = mOrderArray.value.indexOf(selectedItem);

      mDataArray.value.map((item) => {
        if (item.product_id == selectedItem.product_id) {
          item.qty = 0;
        }
      });

      mOrderArray.value.splice(index, 1);
      countSumPrice();
    };

    const clearOrders = () => {
      for (var i = 0; i < mDataArray.value.length; i++) {
        mDataArray.value[i].qty = 0;
      }

      mOrderArray.value = [];
      countSumPrice();
    };

    const pushNewOrder = (item: any) => {
      let foundIndex = mOrderArray.value.indexOf(item);
      if (foundIndex == -1) {
        item.qty = 1;
        mOrderArray.value.unshift(item);
      } else {
        item.qty++;
      }
      countSumPrice();
    };

    const loadProducts = async () => {
      let result = await api.getProducts();
      mDataArray.value = result.data;
    };

    const onClear = ({ message }: any) => {
      alert(message);
      clearOrders();
    };

    const onPaymentResult = (result: any) => {
      if (result.status == "ok") {
        clearOrders();
        mChange.value = result.change;
      }
    };

    return {
      filters,
      mDataArray,
      mOrderArray,
      mChange,
      mTaxAmt,
      mTotalPrice,
      mPayment_dialog,
      pushNewOrder,
      removeOrder,
      clearOrders,
      onClear,
      onPaymentResult,
    };
  },
});
</script>
