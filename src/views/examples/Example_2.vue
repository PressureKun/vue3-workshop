<template>
  <div class="example-body">
    <h3 class="example-title font-extrabold mb-6">
      Overflowed text block with progressbar and form validation.
    </h3>

    <div class="example-content flex gap-6">
      <div class="text-block w-1/2 text-zinc-800">
        <div
          @scroll="saveProgress()"
          ref="scrollBlock"
          class="text-block--wrapper scrollbar-thin p-4 rounded-lg bg-slate-200 scrollbar-track-zinc-500 scrollbar-thumb-indigo-600 overflow-y-auto overflow-x-hidden"
        >
          <p v-for="n in 30" :key="n" class="text mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            excepturi dicta ea veritatis iure, nisi vitae voluptatibus quae
            iusto cumque maxime exercitationem animi? Esse, aliquid.
          </p>
        </div>

        <div
          class="scrollbar overflow-hidden rounded mt-4 relative w-full block h-2 bg-slate-200"
        >
          <div
            :style="calcWidth"
            class="scrollbar-thumb absolute top-0 h-2 left-0 bg-indigo-600"
          ></div>
        </div>
      </div>

      <div v-show="scrollProgress == 100" class="form w-1/2">
        {{ formData }}

        <label class="label">
          <span class="title block mb-1">Somedata 1</span>
          <input
            type="checkbox"
            name="Somedata 1"
            v-model="formData.data1.value"
            class="form-input"
          />
        </label>

        <label class="label">
          <span class="title block mb-1">Somedata 2</span>
          <input
            type="checkbox"
            name="Somedata 2"
            v-model="formData.data2.value"
            class="form-input"
          />
        </label>

        <div v-if="formData.data2.value == true" class="flex gap-8">
          <label class="label">
            <span class="title block mb-1">Somedata 3</span>
            <input
              type="checkbox"
              name="Somedata 3"
              v-model="formData.data3.value"
              class="form-input"
            />
          </label>

          <label class="label">
            <span class="title block mb-1">Somedata 4</span>
            <input
              type="checkbox"
              name="Somedata 4"
              v-model="formData.data4.value"
              class="form-input"
            />
          </label>
        </div>

        <button
          type="button"
          :disabled="!submitDisabled"
          @click="submit()"
          class="btn btn--primary border-4 border-indigo-600 py-2 px-4 text-lg mt-4"
        >
          Submit
        </button>

        <div v-show="showResults" class="summary mt-4">
          <ul>
            <li :key="item.id" v-for="item in formData">
              <span class="name text-lg">
                {{ item.name }}
              </span>

              <span class="value w-8 h-8 inline-block">
                <CheckCircleIcon v-if="item.value" />
                <XCircleIcon v-else />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/solid";
import { XCircleIcon } from "@heroicons/vue/solid";

export default {
  components: {
    CheckCircleIcon,
    XCircleIcon,
  },

  watch: {},

  data() {
    return {
      scrollProgress: 0,
      submited: false,
      showResults: false,

      formData: {
        data1: {
          name: "Somedata 1",
          value: false,
        },
        data2: {
          name: "Somedata 2",
          value: false,
        },
        data3: {
          name: "Somedata 3",
          value: false,
        },
        data4: {
          name: "Somedata 4",
          value: false,
        },
      },
    };
  },

  computed: {
    calcWidth() {
      return "width: " + this.scrollProgress + "%";
    },

    submitDisabled() {
      return Object.values(this.formData).some((item) => item.value == true);
    },
  },

  methods: {
    submit() {
      this.showResults = true;
    },

    saveProgress() {
      let blockScrollHeight = this.$refs.scrollBlock.scrollHeight;

      let currProgress = Math.round(
        this.$refs.scrollBlock.scrollTop +
          this.$refs.scrollBlock.getBoundingClientRect().height,
      );

      console.log(
        "🚀 ~ file: Example_2.vue ~ line 35 ~ saveProgress ~ blockScrollHeight",
        blockScrollHeight,
        currProgress,
      );

      let currPersentage = (currProgress / blockScrollHeight) * 100;

      this.scrollProgress < currPersentage
        ? (this.scrollProgress = currPersentage)
        : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-block--wrapper {
  max-height: 540px;
}
</style>
