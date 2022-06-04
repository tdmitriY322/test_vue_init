<template>
  <div>
    <div class="d-flex justify-center">
      <v-card width="500" class="ma-10" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="mb-2 font-weight-bold text-h5">
              <v-autocomplete
                label="Выберите валюту"
                :items="rateList"
                clearable
                v-model="currency1"
                @change="changeCurrency()"
              >
              </v-autocomplete>
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-text-field
            v-model="value1"
            :label="currency1"
            placeholder="Введите сумму"
            :rules="[$validation.required]"
            clearable
          ></v-text-field>
        </v-card-actions>
      </v-card>
      <v-card width="500" class="ma-10" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="mb-2 font-weight-bold text-h5">
              {{ currency2 }}
            </div>
            <v-list-item-title class="mb-1">
              Актуальный курс на {{ this.currency1 }} {{ this.getRate(this.currency1) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-text-field
            v-model="value2"
            :label="currency2"
            placeholder="Введите сумму"
            clearable
            readonly
          ></v-text-field>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      currency2: "USD",
      currency1: "TESLA",
      value2: "",
      value1: "",
      rate: {},
      rateList: [],
      info: {},
    };
  },

  async created() {
    await this.get_currency_rate();
    // console.log('in curreancy rate',this.getCurrencyRate());
    await this.setRateList();
    await this.setRate();
  },
  computed: {
    ...mapGetters({ STATE: "STATE" }),
  },
  watch: {
    value1() {
      this.calculate();
    },
  },
  methods: {
    ...mapActions({
      get_currency_rate: "getCurrencyRate",
    }),
    async setRateList() {
      this.$set(this, "info", this.STATE.currency);
      this.$set(this, "rateList", Object.keys(this.info.data.rates));
    },
    setRate() {
      this.$set(this, "rate", this.info.data.rates);
      console.log("дошло до сет рейта");
      console.log(this.rate);
    },
    getRate(value) {
      return this.rate[value];
    },
    changeCurrency() {
      this.getRate(this.currency1);
      console.log(this.getRate(this.currency1));
    },
    calculate() {
      this.value2 = this.value1 * this.getRate(this.currency1);
    },
  },
};
</script>
