<template>
  <div class="example-body">
    <h3 class="example-title font-extrabold mb-6">
      Form with dynamic inputs and custom regexp validation
    </h3>

    <div class="example-content flex gap-6">
      <div class="form flex flex-col gap-2 w-1/2">
        <FormGroupInput
          v-for="(input, i) in formData"
          :key="input.id"
          :name="input.name"
          @update="check"
          :index="i"
          :activated="input.activated"
          :validated="input.validated"
        />

        <button
          type="button"
          :disabled="!operable"
          class="btn btn--primary border-4 py-2 px-4 text-lg mt-4"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FormGroupInput from "@/components/FormGroupInput.vue";

export default {
  components: {
    FormGroupInput,
  },

  data() {
    return {
      formData: [
        {
          name: "Somedata 1",
          value: "",
          activated: false,
          validation: /([A-Z])\w+/g,
          validated: false,
        },
        {
          name: "Somedata 2",
          value: "",
          activated: false,
          validation: /([A-Z])\w+/g,
          validated: false,
        },
        {
          name: "Somedata 3",
          value: "",
          activated: false,
          validation: /([A-Z])\w+/g,
          validated: false,
        },
        {
          name: "Somedata 4",
          value: "",
          activated: false,
          validation: /([A-Z])\w+/g,
          validated: false,
        },
      ],
    };
  },
  
  watch: {
    formData: {
      handler(newValue) {
        newValue.find((item) => item.validated === false)
          ? (this.operable = false)
          : (this.operable = true);
      },
      deep: true,
    },
  },

  methods: {
    check(i, value) {
      value ? (this.formData[i].activated = true) : false;
      new RegExp(this.formData[i].validation).test(value)
        ? (this.formData[i].validated = true)
        : (this.formData[i].validated = false);
    },
  },
};
</script>

<style lang="scss" scoped>
.text-block--wrapper {
  max-height: 540px;
}
</style>
