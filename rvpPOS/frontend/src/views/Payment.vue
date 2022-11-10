<template>
  <a-card style="width: 100%">
    <a-row style="width: 100%">
      <a-col :span="24">
        <!-- <div>GetRandom: {{ getRandom() }}</div>
        <div>GetRandom: {{ getRandom() }}</div>

        <div>Random: {{ random }}</div>
        <div>Random: {{ random }}</div> -->

        <a-form v-if="paidNumber > 0">
          <!-- Change section -->
          <a-form-item v-if="changeMoney > 0">
            <a-input
              prefix="Change:"
              :value="$filters.currency(changeMoney)"
              label="Change"
              disabled
            />
          </a-form-item>

          <!-- Given section -->
          <a-form-item>
            <a-input
              prefix="Paid:"
              type="text"
              label="Paid"
              :value="$filters.currency(paidNumber)"
            >
              <template #suffix v-if="paidFloat > 0.0">
                <a-tooltip title="Clear">
                  <CloseCircleOutlined
                    style="color: rgba(0, 0, 0, 0.45)"
                    @click="onClear"
                  />
                </a-tooltip>
              </template>
            </a-input>
          </a-form-item>
        </a-form>

        <!-- a-buttons section -->
        <a-row>
          <a-col :span="8"
            ><a-button
              style="height: 50px"
              type="dashed"
              block
              @click="onPaidChange(1000)"
              >฿1,000</a-button
            ></a-col
          >
          <a-col :span="8"
            ><a-button
              type="dashed"
              style="height: 50px"
              block
              @click="onPaidChange(500)"
              >฿500</a-button
            ></a-col
          >
          <a-col :span="8"
            ><a-button
              type="dashed"
              style="height: 50px"
              block
              @click="onPaidChange(100)"
              >฿100</a-button
            ></a-col
          >
        </a-row>

        <!-- a-buttons section -->
        <a-row>
          <a-col :span="8"
            ><a-button
              type="dashed"
              style="height: 50px"
              block
              @click="onPaidChange(50)"
              >฿50</a-button
            ></a-col
          >
          <a-col :span="8"
            ><a-button
              type="dashed"
              style="height: 50px"
              block
              @click="onPaidChange(20)"
              >฿20</a-button
            ></a-col
          >

          <a-col :span="8"
            ><a-button
              type="dashed"
              block
              style="height: 50px"
              @click="onPaidChange(10)"
              >฿10</a-button
            ></a-col
          >
        </a-row>

        <!-- a-buttons section -->
        <a-row>
          <a-col :span="8">
            <a-button style="height: 50px" type="dashed" block @click="onCancel"
              >CANCEL</a-button
            >
          </a-col>

          <a-col :span="8"
            ><a-button
              style="height: 50px"
              danger
              class="default"
              block
              @click="onPaidExact"
              >EXACT</a-button
            ></a-col
          >

          <a-col :span="8"
            ><a-button
              type="primary"
              block
              style="height: 50px"
              @click="onSubmit"
              :disabled="!isPaidEnough"
              >PAYMENT</a-button
            >
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import api from "@/services/api";
import { defineComponent, ref, computed } from "vue";
import { CloseCircleOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: { CloseCircleOutlined },
  emits: ["onChange"],
  props: {
    totalNumber: Number,
    order_list: String,
  },
  setup(props, { emit }) {
    const paidNumber = ref(0);

    function getRandom() {
      return Math.random();
    }

    const random = computed(() => {
      return Math.random();
    });

    const changeMoney = computed(() => {
      let change = paidFloat.value - props.totalNumber;
      if (change > 0) {
        return change;
      }
      return "";
    });

    const paidFloat = computed(() => {
      return parseFloat(paidNumber.value.toString().replace(/,/g, ""));
    });

    const isPaidEnough = computed(() => {
      return paidFloat.value >= props.totalNumber;
    });

    const onCancel = () => {
      emit("onCancel", {
        message: "Order was cancelled",
      });
    };

    function onClear() {
      paidNumber.value = 0;
    }

    function onPaidChange(paid) {
      paidNumber.value = paidFloat.value + paid;
    }

    function onPaidExact() {
      paidNumber.value = props.totalNumber;
    }

    async function onSubmit() {
      let trans = {
        total: props.totalNumber,
        paid: paidFloat.value,
        change: changeMoney.value,
        payment_type: "cash",
        payment_detail: "full",
        seller_id: "sr0001",
        buyer_id: "by0000",
        order_list: props.order_list,
      };

      await api.sendTransaction(trans);
      emit("onChange", {
        status: "ok",
        change: changeMoney,
      });
    }

    return {
      paidNumber,
      changeMoney,
      isPaidEnough,
      onCancel,
      onClear,
      onPaidChange,
      onPaidExact,
      onSubmit,
      getRandom,
      random,
    };
  },
});
</script>

<style></style>
