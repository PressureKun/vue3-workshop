<template>
  <div class="form-group">
    <label class="flex flex-col w-full">
      <div class="title mb-1 flex gap-2 items-center">
        <span class="text"
        :class="{'text-red-600' : !validated && activated}"
        >
          {{ name }}
        </span>
        <span class="icon w-5 h-5 inline-block">
          <component v-if="activated" :is="icon"></component>
        </span>
      </div>

      <input
        v-model="vFalue"
        @input="inputUpdate"
        class="form-input rounded-md  w-full text-secondary-dark"
        :class="{'border-red-600' : !validated && activated}"
        type="text"
      />
    </label>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/solid";
import { XCircleIcon } from "@heroicons/vue/solid";

export default {
  data() {
    return {
      value: "",
      status: "",
    };
  },

  components: { CheckCircleIcon, XCircleIcon },

  computed: {
    icon() {
      return this.validated ? CheckCircleIcon : XCircleIcon;
    },
  },

  methods: {
    inputUpdate(event) {
      this.$emit("update", this.index, event.target.value);
    },
  },

  props: {
    name: {
      type: String,
      default: "input",
    },
    index: {
      type: Number,
      required: true,
    },
    activated: {
      type: Boolean,
      default: false,
    },
    validated: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
