<template>
  <div class="example-body">
    <h3 class="example-title font-extrabold mb-6">
      Simple form with dynamic data and validation.
    </h3>

    <div class="example-content flex gap-6">
      <form class="flex flex-col gap-2 w-1/2 text-black">
        <input
          v-for="(field, index) in fields"
          :key="field.id"
          v-model="fields[index].value"
          class="form-input rounded-md"
          type="text"
        />

        <div class="flex gap-4 w-full justify-between">
          <!-- <Button @click="addField()" :class="'w-full'" :text="'Add field'" />
          <Button @click="submit()" :class="'w-full'" :text="'Submit'" /> -->

          <button type="button" @click="addField()" class="btn btn--primary">
            Add field
          </button>

          {{ submitDisabled }}
          <button
            type="button"
            :disabled="submitDisabled"
            @click="submit()"
            class="btn btn--primary"
          >
            Submit
          </button>
        </div>
      </form>

      <div class="output w-1/2">
        {{ fields }}
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },

  watch: {
    fields: {
      handler(newValue, oldValue) {
        console.log(
          "🚀 ~ file: example_1.vue ~ line 49 ~ fields ~ newValue",
          newValue,
        );
        if (!newValue.find((field) => field.value == "")) {
          this.submitDisabled = false;
        } else {
          this.submitDisabled = true;
        }
      },
      deep: true,
    },
  },

  data() {
    return {
      submitDisabled: true,

      fields: [
        { name: "Name", value: "" },
        { name: "Email", value: "" },
        { name: "Phone", value: "" },
        { name: "BY", value: "" },
        { name: "LY", value: "" },
      ],
    };
  },

  methods: {
    addField() {
      this.fields.push({ name: "", value: "" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
